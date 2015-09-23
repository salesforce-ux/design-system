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

const getSitePath = path.resolve(path, __PATHS__.site);
const getBuildPath = path.resolve(path, __PATHS__.www);
const ignore = ['.jsx', '.scss'];


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
// i.e. jsx or scss or a dot file
function doNotCopy(filepath) {
  var fileExtension = path.extname(filepath);
  var fileName = filepath.split("/").pop();
  return ((fileExtension === '.jsx') || (fileExtension === '.scss') || ( fileName.charAt(0) === '.'));
}


function fileExists(filepath) {
  try {
    return fs.statSync(filepath).isFile();
  } catch (err) {
    return false;
  }
}

describe('scripts/tasks/site/assets.js', () => {

  var allSiteFiles = walkSync(getSitePath);
  console.log('Number of files found: ' + allSiteFiles.length);

  allSiteFiles.forEach(function(filepath) {

    console.log(filepath);
    var doNotCopyFlag = doNotCopy(getSitePath + '/' + filepath);
    var existFlag = fileExists(getBuildPath + '/' + filepath);

    if (doNotCopyFlag) {

      it('does not copy jsx/scss/.file to .www - ' + filepath, () => {
        expect(existFlag).to.equal(false);
      });

    } else {

      it('does copy non-jsx/scss to .www - ' + filepath, () => {
        expect(existFlag).to.equal(true);
      });

    }
  });
});

