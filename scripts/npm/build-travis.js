// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const path = require('path');
const { execSync } = require('child_process');

const local = path.resolve.bind(path, __dirname, '../../');

const exec = (command, cwd = '') =>
  execSync(command, {
    cwd: local(cwd),
    stdio: 'inherit',
    env: Object.assign({}, process.env)
  });

const runScript = () =>
  exec('NODE_ENV=production npm run build && npm run test && npm run lint && npm run report');

const publishBuild = () =>
  exec('NODE_ENV=production npm run build-server');

if (process.env.BUILD_SERVER_HOST_NEW) {
  runScript();
  publishBuild();
} else {
  runScript();
};
