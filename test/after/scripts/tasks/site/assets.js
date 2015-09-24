/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import { expect } from 'chai';
import path from 'path';
import fs from 'fs';
import { ignore } from 'scripts/tasks/site/assets'
import glob from 'glob';

// function getSitePath(arga) {
//   console.log(arguments);
// }
// JOB 1
// const getSitePath = path.resolve.bind(path, __PATHS__.site);


// var getSitePathCustom = getSitePath.bind(null, 'a')
// getSitePathCustom('b');

// const getBuildPath = path.resolve(path, __PATHS__.www);


// List all files in a directory recursively
var walkSync = function(dir, filelist) {
  var files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      // push relative path name
      filelist.push(path.relative(getSitePath, dir + '/' + file));
    }
  });
  return filelist;
};


// identify file which should not be copied 
//  i.e. jsx or scss or a dot file
function doNotCopy(filepath) {
  var fileExtension = path.extname(filepath);
  var fileName = filepath.split("/").pop();
  return ((ignore.indexOf(fileExtension) !== -1) || ( fileName.charAt(0) === '.'));
}


function fileExists(filepath) {
  try {
    return fs.statSync(filepath).isFile();
  } catch (err) {
    return false;
  }
}


var mistakenCopies = [];
var missedCopies = [];

// before(function() {

//   var allSiteFiles = walkSync(getSitePath);
//   allSiteFiles.forEach(function(filepath) {

//     var doNotCopyFlag = doNotCopy(getSitePath + '/' + filepath);
//     var copiedFlag = fileExists(getBuildPath + '/' + filepath);

//     if (doNotCopyFlag && copiedFlag) {

//       // file SHOULD NOT have been copied
//       mistakenCopies.push(getSitePath + '/' + filepath);

//     } else if (!doNotCopyFlag && !copiedFlag) {

//       // file SHOULD HAVE been copied
//       missedCopies.push(getSitePath + '/' + filepath)
//     }

//   });

// });

let ext = ignore.map(e => e.replace(/^\./, '')).join(',');

describe('scripts/tasks/site/assets.js', () => {

  it.only('does not copy any jsx/scss/.file to .www', () => {
    // if (mistakenCopies.length > 0) {
    //   var detailedErrorMessage = mistakenCopies.length + " mistaken copies: " + mistakenCopies;
    // }
    // expect(mistakenCopies.length).to.equal(0, detailedErrorMessage);
    let files = glob.sync(`${__PATHS__.www}/**/*.{${ext}}`);
    // if (files.length > 0) {
    //   console.log("Mistaken copies: ");
    //   files.forEach(file => console.log(file));
    // }
    expect(files).to.eql([]);
  });

    
  it('does copy all non-jsx/scss to .www', () => {
    // if (missedCopies.length > 0) {
    //   var detailedErrorMessage = missedCopies.length + ' missed copies: ' + missedCopies;
    // }
    // expect(missedCopies.length).to.equal(0, detailedErrorMessage);
    let sitefiles = glob.sync([
        `${__PATHS__.site}/**/*`,
        `!${__PATHS__.site}/**/*.{${ext}}`
    ]);

    let wwwfiles = glob.sync([
        `${__PATHS__.www}/**/*`,
        `!${__PATHS__.www}/**/*.{${ext}}`
    ]);

  });

});

