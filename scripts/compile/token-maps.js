// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const scssParserAura = require('@salesforce-ux/scss-parser-aura');
const scssParserAuraPlugins = require('@salesforce-ux/scss-parser-aura/plugins');

const paths = require('../helpers/paths');
const postcss = require('postcss');
const postcssNestedProps = require('postcss-nested-props');
const postcssScss = require('postcss-scss');

const toTask = require('futurize').futurize(Task);
const writeFile = toTask(fs.writeFile);

const packageJson = require('../../package.json');

//

const jsonDir = path.join(paths.dist, 'design-tokens', 'dist', '**', '*.json');

const designTokenSets = [
  'ui-force',
  'form-factor-large',
  'form-factor-medium',
  'form-factor-small',
  'theme-one-salesforce',
  'bg-actions',
  'bg-custom',
  'bg-standard',
];

const getTokenNames = _.memoize((jsonDir) =>
  _(glob.sync(jsonDir))
    .map((p) => fs.readFileSync(p, 'utf-8'))
    .map((json) => JSON.parse(json))
    .flatMap((obj) => Object.keys(obj))
    .filter((key) => !key.match(/[a-z]/))
    .map((key) => _.kebabCase(key))
    .uniq()
    .value()
);

//

let TokenMaps = {};
let tokensMap = {};

TokenMaps.addTimeDateStamp = (aMap) =>
  new Task((reject, resolve) => {
    resolve(
      Object.assign(aMap, {
        '@generated-by': 'token-maps',
        '@generated-at': new Date(),
        '@slds-version': packageJson.version,
      })
    );
  });

TokenMaps.combineComponentData = (accumulator, item) => {
  const componentName = item.componentName;
  const old = accumulator[componentName] || {};

  accumulator[componentName] = Object.assign({}, old, {
    componentName: componentName,
    path: item.path,
    data: TokenMaps.stripSpaces((old.data ? old.data + '\n' : '') + item.data),
  });

  return accumulator;
};

TokenMaps.convertSassTokenToAuraToken = (sassToken) => _.camelCase(sassToken);

TokenMaps.convertSassTokenToYamlToken = (sassToken) =>
  _.snakeCase(sassToken).toUpperCase();

TokenMaps.convertYamlTokenToAuraToken = (yamlToken) => _.camelCase(yamlToken);

TokenMaps.convertYamlTokenToSassToken = (yamlToken) =>
  `$${_.kebabCase(yamlToken)}`;

TokenMaps.createAuraTokensMap = () =>
  TokenMaps.loadTokens()
    .chain(TokenMaps.addTimeDateStamp)
    .chain(TokenMaps.writeAuraTokensMap);

TokenMaps.createTokenComponentMap = () =>
  TokenMaps.loadTokens()
    .chain(TokenMaps.loadComponentsScss)
    .chain(TokenMaps.parseComponentsScss)
    .chain(TokenMaps.removeDataInScss)
    .chain(TokenMaps.addTimeDateStamp)
    .chain(TokenMaps.writeTokenComponentMap);

TokenMaps.createUtilityPropertiesMap = () =>
  TokenMaps.parseScssTokenPreserved(TokenMaps.getUtilitiesScssPath())
    .chain(TokenMaps.mapSelectorsToProps)
    .chain(TokenMaps.writeUtilityPropertiesMap);

TokenMaps.getComponentNameFromPath = (aPath, basePath) =>
  aPath
    .replace(basePath, '')
    .replace(/^\s*\//, '')
    .replace(/\/.*$/, '');

TokenMaps.getComponentsPath = () => path.join(paths.ui, 'components');

TokenMaps.getSassTokensInValue = (value) =>
  value
    .replace(/(\$-*[_a-zA-Z][a-zA-Z0-9_-]+)/gm, ' $1 ')
    .split(/\s+/)
    .filter(TokenMaps.isSassToken);

TokenMaps.getTokenNames = getTokenNames;

TokenMaps.getUtilitiesPath = () => path.join(paths.ui, 'utilities');

TokenMaps.getUtilitiesScssPath = () =>
  path.resolve(TokenMaps.getUtilitiesPath(), 'index-with-dependencies.scss');

// Sass' Ruby code states:
//
// IDENT    = /-*#{NMSTART}#{NMCHAR}*/
//
// NMSTART  = /[_a-zA-Z]|#{NONASCII}|#{ESCAPE}/
// NMCHAR   = /[a-zA-Z0-9_-]|#{NONASCII}|#{ESCAPE}/
TokenMaps.isSassToken = (value) => value.match(/^\$-*[_a-zA-Z][a-zA-Z0-9_-]+$/);

TokenMaps.loadComponentsScss = (configs) =>
  new Task((reject, resolve) => {
    const componentsPath = TokenMaps.getComponentsPath();
    const scssComponentsMap = glob
      .sync(path.resolve(componentsPath, '**/*.scss'))
      .sort()
      .filter((scssPath) =>
        TokenMaps.validComponentNameFromPath(scssPath, componentsPath)
      )
      .map((scssPath) => ({
        path: TokenMaps.sanitizePath(scssPath),
        componentName: TokenMaps.getComponentNameFromPath(
          scssPath,
          componentsPath
        ),
        data: fs.readFileSync(scssPath, 'utf-8').toString(),
      }))
      .reduce(TokenMaps.combineComponentData, {});

    resolve(scssComponentsMap);
  });

TokenMaps.loadTokens = () =>
  new Task((reject, resolve) => {
    const tokenPaths = designTokenSets.map((tokenSetName) =>
      path.join(paths.designTokens, 'dist', `${tokenSetName}.raw.json`)
    );

    // Update global
    tokensMap = tokenPaths
      .filter((tokenPath) => TokenMaps.validRawTokensDistFile(tokenPath))
      .map((tokenPath) => fs.readFileSync(tokenPath, 'utf-8').toString())
      .map((jsonText) => JSON.parse(jsonText).props || {})
      .reduce((tokensMap, json) => {
        Object.keys(json).forEach(
          (yamlKey) =>
            (tokensMap[TokenMaps.convertYamlTokenToAuraToken(yamlKey)] =
              TokenMaps.sanitizeRawToken(json[yamlKey]))
        );
        return tokensMap;
      }, {});

    resolve(tokensMap);
  });

TokenMaps.mapSelectorsToProps = (css) =>
  new Task((reject, resolve) => {
    let cssSelectorsWithDeclarations = {};

    const addPropValueWithUniqueHash = (selector, prop, value, uniqueHash) => {
      if (
        !cssSelectorsWithDeclarations[selector].find(
          (x) => x._hash === uniqueHash
        )
      ) {
        cssSelectorsWithDeclarations[selector].push({
          property: prop,
          value: value,
          _hash: uniqueHash,
        });
      }
    };

    const ensureSelectorIsArray = (selector) =>
      (cssSelectorsWithDeclarations[selector] =
        cssSelectorsWithDeclarations[selector] || []);

    const removeUniqueHashes = (selectorHash) => {
      Object.keys(selectorHash).forEach((selector) => {
        selectorHash[selector].forEach((declaration) => {
          delete declaration._hash;
        });
      });
    };

    //

    TokenMaps.walkCss(css, (selector, rule, declaration, root) => {
      const { prop, value } = declaration;
      ensureSelectorIsArray(selector);
      addPropValueWithUniqueHash(selector, prop, value, `${prop}`);
    }).then((ignoredResult) => {
      removeUniqueHashes(cssSelectorsWithDeclarations);
      resolve(cssSelectorsWithDeclarations);
    });
  });

TokenMaps.parseComponentsScss = (scssComponentsMap) =>
  new Task((reject, resolve) =>
    Promise.all(
      Object.keys(scssComponentsMap).map((componentName) =>
        TokenMaps.parseScssForTokens(
          scssComponentsMap[componentName].data
        ).then((tokens) => (scssComponentsMap[componentName].tokens = tokens))
      )
    ).then(() => resolve(scssComponentsMap))
  );

TokenMaps.parseScssForTokens = (scss) =>
  new Promise((resolve, reject) => {
    let results = {};

    const safeScss = TokenMaps.sanitizeScss(scss);

    TokenMaps.walkScss(safeScss, (selector, rule, declaration, root) => {
      const { prop, value } = declaration;

      if (TokenMaps.valueContainsSassTokens(value)) {
        TokenMaps.getSassTokensInValue(value).forEach((sassTokenName) => {
          const auraTokenName =
            TokenMaps.convertSassTokenToAuraToken(sassTokenName);
          const yamlTokenName =
            TokenMaps.convertSassTokenToYamlToken(sassTokenName);

          const oldData = results[auraTokenName] || {};
          results[auraTokenName] = Object.assign({}, oldData, {
            auraTokenName: auraTokenName,
            cssProperties: TokenMaps.uniqConcat(
              oldData.cssProperties,
              prop
            ).sort(),
            cssSelectors: TokenMaps.uniqConcat(
              oldData.cssSelectors,
              selector
            ).sort(),
            sassTokenName: sassTokenName,
            value: tokensMap[auraTokenName] && tokensMap[auraTokenName].value,
            yamlTokenName: yamlTokenName,
          });
        });
      }
    }).then((ignoredResult) => {
      resolve(results);
    });
  });

TokenMaps.parseScssTokenPreserved = (scssFilePath) =>
  new Task((reject, resolve) => {
    const result = scssParserAura({
      entry: scssFilePath,
      getTokens: () => TokenMaps.getTokenNames(jsonDir),
      plugins: {
        sass: [
          scssParserAuraPlugins.mixin,
          scssParserAuraPlugins.operations,
          scssParserAuraPlugins.value,
        ],
      },
      info: {},
      transform: (x) => '___TOKEN___' + x.replace(/"|\+/gi, '') + '___END___',
    }).cssTokenized.replace(/___TOKEN___(.*?)___END___/g, '$$$1');
    resolve(result);
  });

TokenMaps.removeDataInScss = (scssComponentsMap) =>
  new Task((reject, resolve) => {
    Object.keys(scssComponentsMap).forEach((componentName) => {
      delete scssComponentsMap[componentName].data;
    });

    resolve(scssComponentsMap);
  });

TokenMaps.sanitizePath = (path) => path.replace(paths.root, '');

TokenMaps.sanitizeRawToken = (token) => ({
  scope: token.scope || '',
  category: token.category,
  comment: token.comment,
  type: token.type,
  cssProperties: token.cssProperties || [],
  value: token.value,
  auraToken: TokenMaps.convertYamlTokenToAuraToken(token.name),
  sassToken: TokenMaps.convertYamlTokenToSassToken(token.name),
  yamlToken: token.name,
  deprecated: token.deprecated,
});

TokenMaps.sanitizeScss = (scss) =>
  scss
    .toString()
    .replace(/(\/\*)(.|\n)+?(\*\/)/gm, '') // Replace multiline comments
    .split('\n') // Break into lines
    .map(
      (line) =>
        line
          .replace(/\/\/.*$/, '') // Remove slash comments
          .trim()
          .replace(/\s+/, ' ') // Compress spaces
    )
    .filter((line) => line && line.length) // Remove blank lines
    .join('\n');

TokenMaps.sanitizeSelector = (selector) =>
  TokenMaps.stripSpaces(selector).replace(/\s+/gm, ' ');

TokenMaps.setTokensMap = (newMap) => (tokensMap = newMap);

TokenMaps.stripSpaces = (string) => String(string || '').trim();

TokenMaps.uniqConcat = (array, value) =>
  array ? (array.includes(value) ? array : array.concat([value])) : [value];

// Names should only have valid characters
TokenMaps.validComponentNameFromPath = (scssPath, componentsPath) =>
  TokenMaps.getComponentNameFromPath(scssPath, componentsPath).match(
    /^[a-zA-Z][a-zA-Z0-9_-]+$/
  );

TokenMaps.validRawTokensDistFile = (tokenPath) =>
  tokenPath.match(/\/[^.]+\.raw\.json+$/);

TokenMaps.valueContainsSassTokens = (value) =>
  String(value).match(/\$-*[_a-zA-Z][a-zA-Z0-9_-]+/);

TokenMaps.walkCss = (css, ruleDeclarationVisitor) =>
  new Promise((resolve, reject) => {
    const walker = postcss.plugin(
      'postcss-walker',
      (options) => (root, result) => {
        root.walkRules((rule) => {
          const selector = TokenMaps.sanitizeSelector(rule.selector);
          rule.walkDecls((declaration) => {
            ruleDeclarationVisitor(selector, rule, declaration, root);
          });
        });

        result = root;
      }
    );

    postcss([walker]).process(css, { from: undefined }).then(resolve);
  });

// @param scss: Sass code to parse
// @param ruleDeclarationVisitor: called at every declaration and will
//     receive the following:
//
//     TokenMaps.parseScss(someScss, (selector, rule, declaration, root) => { /* ...process... */});
//
// @param prePlugins: if not null, prepends PostCSS plugins
// @param processOptions: if not null, adds to PostCSS options to process()
TokenMaps.walkScss = (
  scss,
  ruleDeclarationVisitor,
  prePlugins,
  processOptions
) =>
  new Promise((resolve, reject) => {
    const walker = postcss.plugin(
      'postcss-walker',
      (options) => (root, result) => {
        root.walkRules((rule) => {
          const selector = TokenMaps.sanitizeSelector(rule.selector);
          rule.walkDecls((declaration) => {
            ruleDeclarationVisitor(selector, rule, declaration, root);
          });
        });

        result = root;
      }
    );

    let plugins = [postcssNestedProps, walker];
    if (prePlugins && prePlugins.length > 0) {
      plugins = [].concat(prePlugins).concat(plugins);
    }

    let options = { parser: postcssScss, from: undefined };
    if (processOptions) {
      options = Object.assign({}, options, processOptions);
    }

    postcss(plugins).process(scss, options).then(resolve);
  });

TokenMaps.writeAuraTokensMap = (allTokens) =>
  writeFile(
    path.join(paths.dist, 'ui.aura-tokens.json'),
    JSON.stringify(allTokens)
  );

TokenMaps.writeTokenComponentMap = (scssComponentsMap) =>
  writeFile(
    path.join(paths.dist, 'ui.component-tokens.json'),
    JSON.stringify(scssComponentsMap)
  );

TokenMaps.writeUtilityPropertiesMap = (utilityDeclarationsMap) =>
  writeFile(
    path.join(paths.dist, 'ui.utility-props.json'),
    JSON.stringify(utilityDeclarationsMap)
  );

module.exports = {
  createAuraTokensMap: TokenMaps.createAuraTokensMap,
  createTokenComponentMap: TokenMaps.createTokenComponentMap,
  createUtilityPropertiesMap: TokenMaps.createUtilityPropertiesMap,
  _internal: TokenMaps,
};
