// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import fetch from 'isomorphic-fetch';

// Jest can't handle exports.default
module.exports = async () => {
  await fetch('http://localhost:12345/api/jest/teardown');
};
