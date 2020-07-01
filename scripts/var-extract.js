// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const fs = require('fs');
const glob = require('fast-glob');
const css = require('css');

const extractVars = () => {
  const files = glob.sync('.dist/css/**/index.css');
  const list = {};

  const makeList = rules => {
    let componentList = [];

    rules.map(rule => {
      const filtered = rule.declarations.filter(dec => {
        if (!dec.value) return false;

        // match on var values that are not custom props
        if (dec.value.match(/var\(/) && !dec.property.match(/^--/)) {
          return true;
        }

        return false;
      });

      if (filtered.length > 0) {
        const vars = rule.declarations
          .filter(dec => (dec.value ? dec.value.match(/var\(/) : false))
          .map(dec => dec.value.match(/(--.*?),/)[1]);

        componentList = componentList.concat(vars);
      }
    });

    return componentList;
  };

  files.forEach(file => {
    const fileContents = fs.readFileSync(file, 'utf-8');
    const componentName = file.split('/')[2];
    const ast = css.parse(fileContents);
    const rules = ast.stylesheet.rules.filter(rule => rule.type === 'rule');

    const componentList = makeList(rules);

    if (componentList.length > 0) {
      list[componentName] = [...new Set(componentList)];
    }
  });

  return list;
};

module.exports = {
  extractVars
};
