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


describe('scripts/tasks/site/icons.js', () => {

  it('does copy all icon files', () => {

    // build list of icons file paths which should be copied
    let srcIconFiles = (function () {
      let srcIconPath = __PATHS__.icons;
      return glob.sync(`${srcIconPath}/**/*.{svg,png}`);
    })();
    let relativeSiteIconFiles = srcIconFiles.map(f => path.relative(__PATHS__.icons, f));

    // build list of icon file paths which have been copied to www
    let wwwIconPath = path.resolve(__PATHS__.www, 'assets/icons');
    let wwwIconFiles = glob.sync(`${wwwIconPath}/**/*.*`);

    let relativeWwwIconFiles = wwwIconFiles.map(f => path.relative(wwwIconPath, f));

    expect(relativeSiteIconFiles).to.eql(relativeWwwIconFiles);
  });


  it('does create a icons.zip', () => {

    let wwwDownloadPath = path.resolve(__PATHS__.www, 'assets/downloads');
    let iconsZipFile = glob.sync(`${wwwDownloadPath}/salesforce_icons.zip`);

    expect(iconsZipFile.length).to.eql(1);
  });

});

