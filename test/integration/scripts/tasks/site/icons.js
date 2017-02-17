// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

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

