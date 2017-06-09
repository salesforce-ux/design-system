// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const r = require.context('../../ui', true, /(components|utilities).*?example\.jsx$/);

const examplePath = (component, variant, isUtility) =>
  isUtility
  ? `./utilities/${component}/example.jsx`
  : `./components/${component}/${variant}/example.jsx`;

module.exports = {
  getExample: (component, variant, isUtility = false) =>
    r(examplePath(component, variant, isUtility))
};
