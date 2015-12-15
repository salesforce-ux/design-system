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
import semver from 'semver';
import moment from 'moment';

paths.install();
appModulePath.addPath(__PATHS__.root);

const ENV_DEFAULTS = getDefaultEnvVars();
const INTERNAL_RELEASE_MODES = [
  'dev', 'feature-freeze', 'release-freeze', 'internal-release'
];

const argv = minimist(process.argv.slice(2));

/**
 * Return a modified version number based on the release
 *
 * @param {string} version
 * @param {object} release
 * @returns {string}
 */
function getVersion (version, release) {
  let suffixMap = {
    'dev': '-dev',
    'feature-freeze': '-beta',
    'release-freeze': '-rc',
    'internal-release': '',
    'external-release': ''
  };
  let suffix = suffixMap[release.mode];
  if (suffix) {
    let date = moment().format('YYMMDD-HHmm');
    suffix += `#${date}`;
  }
  return version + suffix;
}

if (process.env.HEROKU_APP_NAME) {
  let deployments = require('server/config/deployments.json');
  let release = _.find(deployments.releases, release => {
    return semver.satisfies(packageJSON.version, release.semver);
  });
  if (!release) {
    throw new Error(`
      No release matched "${packageJSON.version}"
      Please review deployments.json
    `);
  }
  ENV_DEFAULTS.SLDS_VERSION = getVersion(packageJSON.version, release);
  // Internal Production
  if (process.env.HEROKU_APP_NAME.match(/internal-\d-stage$/)) {
    ENV_DEFAULTS.DEFAULT_USER_TYPE = 'internal';
    ENV_DEFAULTS.INTERNAL_RELEASE_NAME = release.name;
  }
}

if (argv.internal === true) {
  ENV_DEFAULTS.DEFAULT_USER_TYPE = 'internal';
}

if (_.isString(argv['url-prefix'])) {
  ENV_DEFAULTS.URL_PREFIX = argv['url-prefix'];
}

_.defaults(process.env, ENV_DEFAULTS);
