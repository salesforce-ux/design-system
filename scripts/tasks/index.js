/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const argv = require('minimist')(process.argv.slice(2));
const isProd = argv.prod === true;

import path from 'path';
import async from 'async';
import _ from 'lodash';
import globals from 'app_modules/global';

import auraCSS from './generate/aura-css';
import { compileSass } from './site/sass';
import { compileSassUtilities } from './generate/sass-utilities';
import { DesignSystemScss } from '@salesforce-ux/design-system-utils';
import updateBoilerplate from './update-boilerplate';

let designSystem = DesignSystemScss({
  path: __PATHS__.ui,
  entryPath: path.resolve(__PATHS__.ui, 'index.scss'),
  designTokensEntryPath: path.resolve(__PATHS__.ui, 'design-tokens.scss'),
  designTokensModulePath: __PATHS__.node_modules,
  scopedCategories: ['components'],
  cssPrefix: globals.cssPrefix
});

const tasks = {

  site: {
    compile: require('./site/compile'),
    fonts: require('./site/fonts'),
    swatches: require('./site/swatches'),
    icons: require('./site/icons'),
    links: require('./site/links'),
    sass: async.apply(compileSass, null)
  },

  generate: {
    auraCSS: async.apply(auraCSS, designSystem),
    icons: require('./generate/icons'),
    releaseNotes: require('./generate/release-notes'),
    sassUtilities: async.apply(compileSassUtilities, null),
    tokens: require('./generate/tokens'),
    ui: require('./generate/ui'),
    version: require('./generate/version'),
    whitelist: require('./generate/whitelist'),
    whitelistUtilities: require('./generate/whitelist-utilities'),
    zipTokens: require('./generate/zip-tokens')
  }

};

module.exports = {

  build: function() {

    async.series([

      function(done) {
        async.parallel([
          tasks.site.fonts,
          tasks.site.icons,
          tasks.site.swatches,
          tasks.generate.tokens
        ], done);
      },

      tasks.site.sass,
      tasks.generate.sassUtilities,

      tasks.generate.whitelist,
      tasks.generate.ui,

      function(done) {
        async.parallel([
          tasks.generate.auraCSS,
          tasks.generate.icons,
          tasks.generate.releaseNotes,
          tasks.generate.version,
          tasks.generate.zipTokens
        ], done);
      },

      // For some reason must be after the async.parallel() block...
      tasks.generate.whitelistUtilities,

      tasks.site.compile,
      tasks.site.links

    ], err => {
      if (err) throw err;
    });

  },

  updateBoilerplate: function() {
    updateBoilerplate();
  }
};
