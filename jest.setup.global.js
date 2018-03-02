// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import { argv } from 'yargs';

import { watch } from './gulpfile';

// Jest can't handle exports.default
module.exports = async () => {
  if (argv.watch) watch();
};
