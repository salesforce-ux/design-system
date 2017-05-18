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
  exec('NODE_ENV=production npm run build && npm run test && npm run lint');

const runExtraScripts = () =>
  exec('NODE_ENV=production npm run report');

const publishBuild = () =>
  exec('NODE_ENV=production npm run build-server');

const isMerge = () =>
  process.env.TRAVIS_COMMIT_MESSAGE.match(/^Merge/g);

const isPR = () =>
  process.env.TRAVIS_PULL_REQUEST == 'true'; // env var is string

const shouldPushToBuildServer = () =>
  isMerge() || isPR()

if (process.env.BUILD_SERVER_HOST_NEW) {
  if (shouldPushToBuildServer()) {
    runScript();
    runExtraScripts();
    publishBuild();
  }
} else {
  runScript();
};
