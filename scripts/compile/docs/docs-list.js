// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const uijson = require('../../../.dist/ui.json');

// loop through component list and add file entry points
let componentExports = {};
Object.keys(uijson.components).forEach(
  c => (componentExports[c] = `./ui/components/${c}/docs.mdx`)
);

module.exports = componentExports;
