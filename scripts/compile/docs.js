// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
const r = require.context('../../ui', true, /.*?docs\.mdx$/);
const allExamples = require('../../shared/components/all-examples');

// NOTE: allExamples is required to make it a global registry of
// test examples.
module.exports = { req: path => r(path), allExamples };
