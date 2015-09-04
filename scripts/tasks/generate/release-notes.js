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
import markdown from 'markdown-it';
const md = markdown({
  html: true,
  linkify: true
});

// map for replacing h1/h2/h3 with SLDS-ified markup
const headingsHtmlMap = { h1: 'h1 class="site-hide"',
                h2: 'h2 class="site-text-heading--large"',
                h3: 'h1 class="site-text-heading--label"'};

// replace a series of sub-strings with replacements specified in a map
function replaceAll(str,mapObj){
  var re = new RegExp(Object.keys(mapObj).join('|'),'gi');

  return str.replace(re, function(matched){
    return mapObj[matched.toLowerCase()];
  });
}

export default function(done) {

  console.log('Getting release notes');

  let releaseNotes = {};

  try {

    const rawHtml = md.render(fs.readFileSync(path.resolve(__PATHS__.root, 'RELEASENOTES.md')).toString());

    // replace h1/h2/h3 with SLDS markup
    releaseNotes.html = replaceAll(rawHtml, headingsHtmlMap);

    const releaseNotesHtml = JSON.stringify(releaseNotes, null, 2);
    const releaseNotesModule = `module.exports = ${releaseNotesHtml};`;
    fs.writeFileSync(path.resolve(__PATHS__.generated, 'site.release-notes.js'), releaseNotesModule);
    done();

  } catch(err) {
    done(err);
  }

}
