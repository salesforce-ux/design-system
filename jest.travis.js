// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const { execSync } = require('child_process');

execSync('npm run test:compile-integration', {
  stdio: ['inherit', 'inherit', 'inherit']
});

// local runs the same thing, but slightly different to not throw
// Check jest.vrt.watch.js
execSync('./node_modules/.bin/jest --color', {
  stdio: ['inherit', 'inherit', 'inherit']
});
