/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import paths from './paths';
import appModulePath from 'app-module-path';
import minimist from 'minimist';
import _ from 'lodash';
import { getDefaultEnvVars } from './env';
import packageJSON from '../../package.json';

paths.install();
appModulePath.addPath(__PATHS__.root);

const TRAVIS_BRANCH = process.env.TRAVIS_BRANCH || '';
const BUILD_NUMBER = process.env.TRAVIS_JOB_NUMBER;
const ENV_DEFAULTS = getDefaultEnvVars();

const argv = minimist(process.argv.slice(2));

try {
  let deployments =  require('scripts-internal/deploy/config/deployments.json');
  // Check to see if the current branch matches a known release
  let release = _.find(deployments.releases, { sourceBranch: TRAVIS_BRANCH });
  // Internal
  if (release && _.includes(deployments.internal, release.id)) {
    process.env.SLDS_VERSION = `${packageJSON.version}-dev.${BUILD_NUMBER}`;
    process.env.DEFAULT_USER_TYPE = 'internal';
    process.env.INTERNAL_RELEASE_ID = release.releaseInternalName;
    process.argv.push('--internal');
  }
} catch (e) {}

if (argv.internal === true) {
  ENV_DEFAULTS.DEFAULT_USER_TYPE = 'internal';
}

if (_.isString(argv['url-prefix'])) {
  ENV_DEFAULTS.URL_PREFIX = argv['url-prefix'];
}

_.defaults(process.env, ENV_DEFAULTS);
