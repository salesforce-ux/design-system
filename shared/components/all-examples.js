// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

var examples = [];

const getExamples = () => examples;
const addExample = x => examples.push(x);

export default { getExamples, addExample };
