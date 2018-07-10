// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const paths = require('../helpers/paths');
const precss = require('precss');
const postcss = require('postcss');
const postcssNestedProps = require('postcss-nested-props');
const postcssScss = require('postcss-scss');

const toTask = require('futurize').futurize(Task);
const writeFile = toTask(fs.writeFile);

const packageJson = require('../../package.json');

//

let TokenMaps = {};
let tokensMap = {};

//

TokenMaps.addTimeDateStamp = aMap =>
  new Task((reject, resolve) => {
    resolve(
      Object.assign(aMap, {
        '@generated-by': 'token-maps',
        '@generated-at': new Date(),
        '@slds-version': packageJson.version
      })
    );
  });

TokenMaps.combineComponentData = (accumulator, item) => {
  const componentName = item.componentName;
  const old = accumulator[componentName] || {};

  accumulator[componentName] = Object.assign({}, old, {
    componentName: componentName,
    path: item.path,
    data: TokenMaps.stripSpaces((old.data ? old.data + '\n' : '') + item.data)
  });

  return accumulator;
};

TokenMaps.convertSassTokenToAuraToken = sassToken => _.camelCase(sassToken);

TokenMaps.convertSassTokenToYamlToken = sassToken =>
  _.snakeCase(sassToken).toUpperCase();

TokenMaps.convertYamlTokenToAuraToken = yamlToken => _.camelCase(yamlToken);

TokenMaps.convertYamlTokenToSassToken = yamlToken =>
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

TokenMaps.getComponentsPath = () => path.join(paths.ui, 'components');

TokenMaps.getComponentNameFromPath = (aPath, basePath) =>
  aPath
    .replace(basePath, '')
    .replace(/^\s*\//, '')
    .replace(/\/.*$/, '');

TokenMaps.getSassTokensInValue = value =>
  value
    .replace(/(\$-*[_a-zA-Z][a-zA-Z0-9_-]+)/gm, ' $1 ')
    .split(/\s+/)
    .filter(TokenMaps.isSassToken);

// Sass' Ruby code states:
//
// IDENT    = /-*#{NMSTART}#{NMCHAR}*/
//
// NMSTART  = /[_a-zA-Z]|#{NONASCII}|#{ESCAPE}/
// NMCHAR   = /[a-zA-Z0-9_-]|#{NONASCII}|#{ESCAPE}/
TokenMaps.isSassToken = value => value.match(/^\$-*[_a-zA-Z][a-zA-Z0-9_-]+$/);

TokenMaps.loadComponentsScss = configs =>
  new Task((reject, resolve) => {
    const componentsPath = TokenMaps.getComponentsPath();
    const scssComponentsMap = glob
      .sync(path.resolve(componentsPath, '**/*.scss'))
      .sort()
      .filter(scssPath =>
        TokenMaps.validComponentNameFromPath(scssPath, componentsPath)
      )
      .map(scssPath => ({
        path: TokenMaps.sanitizePath(scssPath),
        componentName: TokenMaps.getComponentNameFromPath(
          scssPath,
          componentsPath
        ),
        data: fs.readFileSync(scssPath, 'utf-8').toString()
      }))
      .reduce(TokenMaps.combineComponentData, {});

    resolve(scssComponentsMap);
  });

TokenMaps.loadTokens = () =>
  new Task((reject, resolve) => {
    const tokensPath = path.join(paths.designTokens, 'dist');

    // Update global
    tokensMap = glob
      .sync(path.resolve(tokensPath, '**/*.raw.json'))
      .filter(tokenPath => TokenMaps.validRawTokensDistFile(tokenPath))
      .map(tokenPath => fs.readFileSync(tokenPath, 'utf-8').toString())
      .map(jsonText => JSON.parse(jsonText).props || {})
      .reduce((tokensMap, json) => {
        Object.keys(json).forEach(
          yamlKey =>
            (tokensMap[
              TokenMaps.convertYamlTokenToAuraToken(yamlKey)
            ] = TokenMaps.sanitizeRawToken(json[yamlKey]))
        );
        return tokensMap;
      }, {});

    resolve(tokensMap);
  });

TokenMaps.parseComponentsScss = scssComponentsMap =>
  new Task((reject, resolve) =>
    Promise.all(
      Object.keys(scssComponentsMap).map(componentName =>
        TokenMaps.parseScssForTokens(
          scssComponentsMap[componentName].data
        ).then(tokens => (scssComponentsMap[componentName].tokens = tokens))
      )
    ).then(() => resolve(scssComponentsMap))
  );

TokenMaps.parseScssForTokens = scss =>
  new Promise((resolve, reject) => {
    let results = {};
    let tkeys = Object.keys(tokensMap);

    const walker = postcss.plugin(
      'postcss-walker',
      options => (root, result) => {
        root.walkRules(rule => {
          const selector = TokenMaps.sanitizeSelector(rule.selector);
          rule.walkDecls(declaration => {
            const { prop, value } = declaration;

            if (TokenMaps.valueContainsSassTokens(value)) {
              TokenMaps.getSassTokensInValue(value).forEach(sassTokenName => {
                const auraTokenName = TokenMaps.convertSassTokenToAuraToken(
                  sassTokenName
                );
                const yamlTokenName = TokenMaps.convertSassTokenToYamlToken(
                  sassTokenName
                );

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
                  value:
                    tokensMap[auraTokenName] && tokensMap[auraTokenName].value,
                  yamlTokenName: yamlTokenName
                });
              });
            }
          });
        });

        result = root;
      }
    );

    const safeScss = TokenMaps.sanitizeScss(scss);
    const precssOptions = {
      unresolved: 'ignore'
    };
    postcss([postcssNestedProps, precss(precssOptions), walker])
      .process(safeScss, { parser: postcssScss })
      .then(result => {
        resolve(results);
      });
  });

TokenMaps.removeDataInScss = scssComponentsMap =>
  new Task((reject, resolve) => {
    Object.keys(scssComponentsMap).forEach(componentName => {
      delete scssComponentsMap[componentName].data;
    });

    resolve(scssComponentsMap);
  });

TokenMaps.sanitizePath = path => path.replace(paths.root, '');

TokenMaps.sanitizeRawToken = token => ({
  category: token.category,
  comment: token.comment,
  type: token.type,
  cssProperties: token.cssProperties || [],
  value: token.value,
  auraToken: TokenMaps.convertYamlTokenToAuraToken(token.name),
  sassToken: TokenMaps.convertYamlTokenToSassToken(token.name),
  yamlToken: token.name
});

TokenMaps.sanitizeScss = scss =>
  scss.replace(/\s*\/\/.*$/gm, '').replace(/\s*\/\*(.|\n)*?\*\/\s*/gm, '\n');

TokenMaps.sanitizeSelector = selector =>
  TokenMaps.stripSpaces(selector).replace(/\s+/gm, ' ');

TokenMaps.setTokensMap = newMap => (tokensMap = newMap);

TokenMaps.stripSpaces = string =>
  String(string || '')
    .replace(/^\s+/, '')
    .replace(/\s+$/, '');

TokenMaps.uniqConcat = (array, value) =>
  array ? (array.includes(value) ? array : array.concat([value])) : [value];

// Names should only have valid characters
TokenMaps.validComponentNameFromPath = (scssPath, componentsPath) =>
  TokenMaps.getComponentNameFromPath(scssPath, componentsPath).match(
    /^[a-zA-Z][a-zA-Z0-9_\-]+$/
  );

TokenMaps.valueContainsSassTokens = value =>
  String(value).match(/\$-*[_a-zA-Z][a-zA-Z0-9_-]+/);

TokenMaps.validRawTokensDistFile = tokenPath =>
  tokenPath.match(/\/[^.]+\.raw\.json+$/);

TokenMaps.writeAuraTokensMap = allTokens =>
  writeFile(
    path.join(paths.dist, 'ui.aura-tokens.json'),
    JSON.stringify(allTokens)
  );

TokenMaps.writeTokenComponentMap = scssComponentsMap =>
  writeFile(
    path.join(paths.dist, 'ui.component-tokens.json'),
    JSON.stringify(scssComponentsMap)
  );

module.exports = {
  createAuraTokensMap: TokenMaps.createAuraTokensMap,
  createTokenComponentMap: TokenMaps.createTokenComponentMap,
  _internal: TokenMaps
};
