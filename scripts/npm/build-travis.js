/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import '../helpers/setup';
import path from 'path';
import { execSync } from 'child_process';

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
    process.env.INTERNAL_RELEASE_NAME = process.env.npm_package_slds_id;
    process.env.SLDS_VERSION = `${process.env.npm_package_version} (${process.env.INTERNAL_RELEASE_NAME})`;
  } else {
    // If the value isn't "true", then delete the variables
    // because the code checks like:
    // if (process.env.INTENRAL)
    delete process.env.INTERNAL;
    delete process.env.INTERNAL_RELEASE_NAME;
    process.env.SLDS_VERSION = `${process.env.npm_package_version}`;
  }
};

const runScript = () =>
  exec('npm run build && npm run test && npm run lint');

const publishBuild = () =>
  exec('npm run build-server');

if (process.env.BUILD_SERVER_HOST_NEW) {
  setEnvironment();
  runScript();
  publishBuild();
} else {
  runScript();
};
