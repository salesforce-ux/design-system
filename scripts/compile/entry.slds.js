// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
const r = require.context(
  '../../ui',
  true,
  /(components|utilities).*?(example\.jsx|docs\.mdx)$/
);

const I = require('immutable');
const Either = require('data.either');

const ui = require('../../.dist/ui.json');
const createInstance = require('../lib');

const SLDS = createInstance(I.fromJS(ui));

const examplePath = (component, variant, isUtility) =>
  isUtility
    ? `./utilities/${component}/example.jsx`
    : `./components/${component}/${variant}/example.jsx`;

const docPath = (component, isUtility) =>
  isUtility
    ? `./utilities/${component}/docs.mdx`
    : `./components/${component}/docs.mdx`;

const isUtil = component => SLDS.utilities().find(u => u === component);

module.exports = Object.assign(SLDS, {
  getDocs: component => Either.try(r)(docPath(component, isUtil(component))),
  getExample: (component, variant) =>
    r(examplePath(component, variant, isUtil(component)))
});
