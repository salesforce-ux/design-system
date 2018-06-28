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

let F = {};
let tokensMap = {};

//

F.addTimeDateStamp = aMap =>
  new Task((reject, resolve) => {
    resolve(
      Object.assign(aMap, {
        '@generated-by': 'token-maps',
        '@generated-at': new Date(),
        '@slds-version': packageJson.version
      })
    );
  });

F.combineComponentData = (accumulator, item) => {
  const componentName = item.componentName;
  const old = accumulator[componentName] || {};

  accumulator[componentName] = Object.assign({}, old, {
    componentName: componentName,
    path: item.path,
    data: F.stripSpaces((old.data ? old.data + '\n' : '') + item.data)
  });

  return accumulator;
};

F.convertSassTokenToAuraToken = sassToken => _.camelCase(sassToken);

F.convertSassTokenToYamlToken = sassToken =>
  _.snakeCase(sassToken).toUpperCase();

F.convertYamlTokenToAuraToken = yamlToken => _.camelCase(yamlToken);

F.convertYamlTokenToSassToken = yamlToken => `$${_.kebabCase(yamlToken)}`;

F.createAuraTokensMap = () =>
  F.loadTokens()
    .chain(F.addTimeDateStamp)
    .chain(F.writeAuraTokensMap);

F.createTokenComponentMap = () =>
  F.loadTokens()
    .chain(F.loadComponentsScss)
    .chain(F.parseComponentsScss)
    .chain(F.removeDataInScss)
    .chain(F.addTimeDateStamp)
    .chain(F.writeTokenComponentMap);

F.getComponentsPath = () => path.join(paths.ui, 'components');

F.getComponentNameFromPath = (aPath, basePath) =>
  aPath
    .replace(basePath, '')
    .replace(/^\s*\//, '')
    .replace(/\/.*$/, '');

F.getSassTokensInValue = value =>
  value
    .replace(/(\$-*[_a-zA-Z][a-zA-Z0-9_-]+)/gm, ' $1 ')
    .split(/\s+/)
    .filter(F.isSassToken);

// Sass' Ruby code states:
//
// IDENT    = /-*#{NMSTART}#{NMCHAR}*/
//
// NMSTART  = /[_a-zA-Z]|#{NONASCII}|#{ESCAPE}/
// NMCHAR   = /[a-zA-Z0-9_-]|#{NONASCII}|#{ESCAPE}/
F.isSassToken = value => value.match(/^\$-*[_a-zA-Z][a-zA-Z0-9_-]+$/);

F.loadComponentsScss = configs =>
  new Task((reject, resolve) => {
    const componentsPath = F.getComponentsPath();
    const scssComponentsMap = glob
      .sync(path.resolve(componentsPath, '**/*.scss'))
      .sort()
      .filter(scssPath =>
        F.validComponentNameFromPath(scssPath, componentsPath)
      )
      .map(scssPath => ({
        path: F.sanitizePath(scssPath),
        componentName: F.getComponentNameFromPath(scssPath, componentsPath),
        data: fs.readFileSync(scssPath, 'utf-8').toString()
      }))
      .reduce(F.combineComponentData, {});

    resolve(scssComponentsMap);
  });

F.loadTokens = () =>
  new Task((reject, resolve) => {
    const tokensPath = path.join(paths.designTokens, 'dist');

    // Update global
    tokensMap = glob
      .sync(path.resolve(tokensPath, '**/*.raw.json'))
      .filter(tokenPath => F.validRawTokensDistFile(tokenPath))
      .map(tokenPath => fs.readFileSync(tokenPath, 'utf-8').toString())
      .map(jsonText => JSON.parse(jsonText).props || {})
      .reduce((tokensMap, json) => {
        Object.keys(json).forEach(
          yamlKey =>
            (tokensMap[
              F.convertYamlTokenToAuraToken(yamlKey)
            ] = F.sanitizeRawToken(json[yamlKey]))
        );
        return tokensMap;
      }, {});

    resolve(tokensMap);
  });

F.parseComponentsScss = scssComponentsMap =>
  new Task((reject, resolve) =>
    Promise.all(
      Object.keys(scssComponentsMap).map(componentName =>
        F.parseScssForTokens(scssComponentsMap[componentName].data).then(
          tokens => (scssComponentsMap[componentName].tokens = tokens)
        )
      )
    ).then(() => resolve(scssComponentsMap))
  );

F.parseScssForTokens = scss =>
  new Promise((resolve, reject) => {
    let results = {};
    let tkeys = Object.keys(tokensMap);

    const walker = postcss.plugin(
      'postcss-walker',
      options => (root, result) => {
        root.walkRules(rule => {
          const selector = F.sanitizeSelector(rule.selector);
          rule.walkDecls(declaration => {
            const { prop, value } = declaration;

            if (F.valueContainsSassTokens(value)) {
              F.getSassTokensInValue(value).forEach(sassTokenName => {
                const auraTokenName = F.convertSassTokenToAuraToken(
                  sassTokenName
                );
                const yamlTokenName = F.convertSassTokenToYamlToken(
                  sassTokenName
                );

                const oldData = results[auraTokenName] || {};
                results[auraTokenName] = Object.assign({}, oldData, {
                  auraTokenName: auraTokenName,
                  cssProperties: F.uniqConcat(
                    oldData.cssProperties,
                    prop
                  ).sort(),
                  cssSelectors: F.uniqConcat(
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

    const safeScss = F.sanitizeScss(scss);
    const precssOptions = {
      unresolved: 'ignore'
    };
    postcss([postcssNestedProps, precss(precssOptions), walker])
      .process(safeScss, { parser: postcssScss })
      .then(result => {
        resolve(results);
      });
  });

F.removeDataInScss = scssComponentsMap =>
  new Task((reject, resolve) => {
    Object.keys(scssComponentsMap).forEach(componentName => {
      delete scssComponentsMap[componentName].data;
    });

    resolve(scssComponentsMap);
  });

F.sanitizePath = path => path.replace(paths.root, '');

F.sanitizeRawToken = token => ({
  category: token.category,
  comment: token.comment,
  type: token.type,
  cssProperties: token.cssProperties || [],
  value: token.value,
  auraToken: F.convertYamlTokenToAuraToken(token.name),
  sassToken: F.convertYamlTokenToSassToken(token.name),
  yamlToken: token.name
});

F.sanitizeScss = scss =>
  scss.replace(/\s*\/\/.*$/gm, '').replace(/\s*\/\*(.|\n)*?\*\/\s*/gm, '\n');

F.sanitizeSelector = selector => F.stripSpaces(selector).replace(/\s+/gm, ' ');

F.setTokensMap = newMap => (tokensMap = newMap);

F.stripSpaces = string =>
  String(string || '')
    .replace(/^\s+/, '')
    .replace(/\s+$/, '');

F.uniqConcat = (array, value) =>
  array ? (array.includes(value) ? array : array.concat([value])) : [value];

// Names should only have valid characters
F.validComponentNameFromPath = (scssPath, componentsPath) =>
  F.getComponentNameFromPath(scssPath, componentsPath).match(
    /^[a-zA-Z][a-zA-Z0-9_\-]+$/
  );

F.valueContainsSassTokens = value =>
  String(value).match(/\$-*[_a-zA-Z][a-zA-Z0-9_-]+/);

F.validRawTokensDistFile = tokenPath => tokenPath.match(/\/[^.]+\.raw\.json+$/);

F.writeAuraTokensMap = allTokens =>
  writeFile(
    path.join(paths.dist, 'ui.aura-tokens.json'),
    JSON.stringify(allTokens)
  );

F.writeTokenComponentMap = scssComponentsMap =>
  writeFile(
    path.join(paths.dist, 'ui.component-tokens.json'),
    JSON.stringify(scssComponentsMap)
  );

module.exports = {
  createAuraTokensMap: F.createAuraTokensMap,
  createTokenComponentMap: F.createTokenComponentMap,
  _internal: F
};
