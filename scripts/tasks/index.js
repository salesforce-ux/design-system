/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import _ from 'lodash';
import async from 'async';

import siteCopyAssets from './site/assets';
import { createPageCompiler } from './site/compile';
import siteIcons from './site/icons';
import siteLinks from './site/links';
import siteSass from './site/sass';
import { compile as siteWebpack } from './site/webpack';

import generateIcons from './generate/icons';
import generateReleaseNotes from './generate/release-notes';
import generateSassUtilities from './generate/sass-utilities';
import generateTokens from './generate/tokens';
import generateUI from './generate/ui';
import generateVersion from './generate/version';
import generateWhitelist from './generate/whitelist';
import generateWhitelistUtilities from './generate/whitelist-utilities';
import generateTokensZip from './generate/zip-tokens';

const sitePages = createPageCompiler();

function generate (callback) {

  async.series([

    siteSass,

    function(done) {
      async.parallel([
        generateSassUtilities,
        generateUI,
      ], done);
    },

    function(done) {
      async.parallel([
        generateIcons,
        generateReleaseNotes,
        generateTokens,
        generateVersion,
        generateWhitelist,
        generateWhitelistUtilities
      ], done);
    },

  ], callback);

}

export default function (options, callback) {

  const tasks = [];

  if (options.generate === true) {
    tasks.push(generate);
  }

  if (options.site === true) {
    tasks.push(
      siteCopyAssets,
      siteIcons,
      sitePages.compile,
      siteLinks,
      async.apply(siteWebpack, {
        prod: options.prod === true
      })
    );
  }

  async.series(tasks, callback);

}
