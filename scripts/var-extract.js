// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const sass = require('sass');
const css = require('css');
const path = require('path');

const extractVars = () => {
  const result = sass.renderSync({ file: path.resolve('./ui/index.scss') });
  const cssString = result.css.toString();
  const obj = css.parse(cssString);
  const ssObjects = obj.stylesheet.rules;
  const rules = ssObjects.filter(rule => rule.type === 'rule');

  const list = {};

  rules.map(rule => {
    const filtered = rule.declarations.filter(dec =>
      dec.value ? dec.value.match(/var\(/) : false
    );

    if (filtered.length > 0) {
      const selectorBase = rule.selectors[0]
        .replace(/_+.*/, '')
        .replace(/\s.*/, '')
        .replace('.slds-', '');

      const vars = rule.declarations
        .filter(dec => (dec.value ? dec.value.match(/var\(/) : false))
        .map(dec => dec.value.match(/(--.*?),/)[1]);

      if (list[selectorBase]) {
        list[selectorBase] = list[selectorBase].concat(vars);
      } else {
        list[selectorBase] = vars;
      }
    }
  });

  return list;
};

module.exports = {
  extractVars
};
