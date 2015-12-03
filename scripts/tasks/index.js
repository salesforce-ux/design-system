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
import globals from 'app_modules/global';
import minimist from 'minimist';

import siteCopyAssets from './site/assets';
import { createPageCompiler } from './site/compile';
import siteIcons from './site/icons';
import siteLinks from './site/links';
import { compileSass as siteSass } from './site/sass';
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

const argv = minimist(process.argv.slice(2));
const isDev = argv.dev === true;
const isProd = argv.prod === true;
const isInternal = argv.internal === true;

const sitePages = createPageCompiler();

export default function (callback) {

  async.series([

    function(done) {
      async.parallel([
        siteCopyAssets,
        siteIcons,
        generateTokens
      ], done);
    },

    async.apply(siteSass, null),
    generateSassUtilities,

    generateWhitelist,
    generateUI,

    function(done) {
      async.parallel([
        generateIcons,
        generateReleaseNotes,
        generateVersion,
        generateTokensZip
      ], done);
    },

    generateWhitelistUtilities,

    sitePages.compile,
    siteLinks,

    async.apply(siteWebpack, {
      prod: isProd
    })

  ], callback);

}
