// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const r = require.context('../../ui', true, /(components|utilities).*?example\.jsx$/);
const I = require("immutable");

const createInstance = require('../lib');
const ui = require('../../.dist/ui.json');
let SLDS = createInstance(I.fromJS(ui));

const examplePath = (component, variant, isUtility) =>
  isUtility
  ? `./utilities/${component}/example.jsx`
  : `./components/${component}/${variant}/example.jsx`;

module.exports = Object.assign(SLDS, {
  getExample: (component, variant) =>
    r(examplePath(component, variant, SLDS.utilities().find(u => u === component)))
});
