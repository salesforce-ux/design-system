/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs';
import glob from 'glob';
import _ from 'lodash';

export const excludeLinks = [
  '/bugs',
  '/feedback'
];

export default function (done) {
  console.log('Checking links');
  _(glob.sync(path.resolve(__PATHS__.www, '**/*.html')))
    .map(filePath => {
      let html = fs.readFileSync(filePath).toString();
      let pattern = /href\=\"(.*?)\"/g;
      let match, matches = [];
      while ((match = pattern.exec(html)) !== null) {
        matches.push({
          filePath,
          url: match[1]
        });
      }
      return matches;
    })
    .flatten()
    .filter(({url}) => /^\/[^/]/.test(url))
    .filter(({url}) => !_.includes(excludeLinks, url))
    .map(({filePath, url}) => {
      return {
        filePath,
        url: path.resolve(
          __PATHS__.www,
          url.replace(/^\//, '').replace(/[?#].*/, '')
        )
      };
    })
    .filter(item => {
      try {
        let stat = fs.statSync(item.url);
        return false;
      } catch (e) {
        return true;
      }
    })
    .thru(allItems => {
      if (allItems && allItems.length > 0) {
        console.log('');
        console.log('**********************');
        console.log('* BROKEN LINKS FOUND *');
        console.log('**********************');
        console.log('');
        console.log(allItems.length === 1 ? '1 broken link:' : `${allItems.length} broken links:`);
        console.log('');
      } else {
        console.log('No broken links found.');
      }
      return allItems;
    })
    .forEach((item, itemIdx) => {
      let num = itemIdx + 1;
      let indent = '  ';
      for (let i = 0; i < num.toString().length; i++) {
        indent += ' ';
      }
      console.log(`${itemIdx + 1}. To: ${item.url.replace(__PATHS__.www, '')}`);
      console.log(`${indent}In: ${item.filePath}`);
    })
    .thru(allItems => {
      console.log('');
      return allItems;
    })
    .value();
  done();
}
