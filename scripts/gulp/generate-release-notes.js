/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import gulp from 'gulp';
import gutil from 'gulp-util';
import markdown from 'markdown-it';
import through from 'through2';

const md = markdown({
  html: true,
  linkify: true
});

const headingsMap = {
  h1: 'h1 class="site-hide"',
  h2: 'h2 class="site-text-heading--large"',
  h3: 'h1 class="site-text-heading--label"'
};

const replace = (str, map) => {
  const pattern = new RegExp(_.keys(map).join('|'), 'gi');
  return str.replace(pattern, match =>
    map[match.toLowerCase()]
  );
};

gulp.task('generate:release-notes', () =>
  gulp
    .src('./RELEASENOTES.md')
    .pipe(through.obj((file, enc, next) => {
      try {
        const html = md.render(file.contents.toString());
        const releaseNotes = JSON.stringify({
          html: replace(html, headingsMap)
        }, null, 2);
        next(null, new gutil.File({
          path: 'site.release-notes.js',
          contents: new Buffer(`export default ${releaseNotes}`)
        }));
      } catch (err) {
        next(err);
      }
    }))
    .pipe(gulp.dest(__PATHS__.generated))
);
