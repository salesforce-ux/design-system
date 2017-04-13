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

const setEnvironment = () => {
  // Once the package.json is loaded into process.env all values become strings
  if (process.env.npm_package_config_slds_internal === 'true') {
    process.env.INTERNAL = process.env.npm_package_config_slds_internal;
    process.env.INTERNAL_RELEASE_NAME = process.env.npm_package_slds_name;
    process.env.SLDS_VERSION = `${process.env.npm_package_version}`;
  } else {
    // If the value isn't "true", then delete the variables
    // because the code checks like:
    delete process.env.INTERNAL;
    delete process.env.INTERNAL_RELEASE_NAME;
    process.env.SLDS_VERSION = `${process.env.npm_package_version}`;
  }
};

const runScript = () =>
  exec('NODE_ENV=production npm run build && npm run test && npm run lint && npm run report');

const publishBuild = () =>
  exec('NODE_ENV=production npm run build-server');

if (process.env.BUILD_SERVER_HOST_NEW) {
  setEnvironment();
  runScript();
  publishBuild();
} else {
  runScript();
};
