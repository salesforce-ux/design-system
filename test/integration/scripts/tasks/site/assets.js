/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import { expect } from 'chai';
import _ from 'lodash';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import { ignore as ignoreExtensions } from 'scripts/tasks/site/assets';

describe('scripts/tasks/site/assets.js', () => {

  it('does not copy any jsx/scss/.file to .www', () => {
    let files = glob.sync(`${__PATHS__.www}/**/*.{${ignoreExtensions}}`);
    expect(files).to.eql([]);
  });

  it('does copy all non-jsx/scss to .www', () => {

    // build list of source site file paths which should be copied
    let siteFiles = (function () {
      let all = glob.sync(`${__PATHS__.site}/**/*.*`);
      let ignore = glob.sync(`${__PATHS__.site}/**/*.{${ignoreExtensions}}`);
      return _.difference(all, ignore);
    })();

    let relativeSiteFiles = siteFiles.map(f => path.relative(__PATHS__.site, f));

    // build list of www file paths
    let wwwFiles = glob.sync(`${__PATHS__.www}/**/*.*`);
    let relativeWwwFiles = wwwFiles.map(f => path.relative(__PATHS__.www, f));

    // all of relativeSiteFiles should be in relativeWwwFiles
    let copiedSiteFiles = _.intersection(relativeSiteFiles, relativeWwwFiles);
    expect(relativeSiteFiles).to.eql(copiedSiteFiles);
  });

});

