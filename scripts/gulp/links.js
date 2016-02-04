/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import through from 'through2';

const URL_BLACKLIST = [
  '/bugs',
  '/feedback'
];

const report = () => {
  const pages = [];
  return through.obj(
    (page, enc, next) => {
      pages.push(page);
      next(null, page);
    },
    (next) => {
      if (pages.length) {
        const { bold, dim, italic, underline, red } = gutil.colors;
        const count = pages
          .reduce((total, page) => total + page.urls.length, 0);
        const message = [
          '',
          gutil.colors.red(`Found ${underline(count)} broken link(s) on ${underline(pages.length)} page(s)`),
        ];
        pages.forEach(page => {
          const pagePath = `/${page.file.relative}`;
          message.push('');
          message.push(`PAGE: ${bold(pagePath)}`);
          page.urls.forEach(url => {
            message.push(` URL: ${red(url)}`);
          });
        });
        message.push('');
        console.log(message.join('\n'));
      }
      next(null);
    }
  );
};

gulp.task('links', () =>
  gulp
    .src('.www/**/*.html')
    .pipe(through.obj(function (file, enc, next) {
      const pattern = /href\=\"(.*?)\"/g;
      const html = file.contents.toString();
      const matches = [];
      let match;
      while ((match = pattern.exec(html)) !== null) {
        matches.push(match[1]);
      }
      const urls = matches
        // Exclude urls that don't start with "/"
        .filter(url => /^\/[^/]/.test(url))
        // Exclude urls are listed in excludeLinks
        .filter(url => !_.includes(URL_BLACKLIST, url))
        // Access
        .filter(url => {
          const cleanedUrl = url
            // Remove leading slash
            .replace(/^\//, '')
            // Remove trailing hash
            .replace(/[?#].*/, '');
          const sitePath = path.resolve(__PATHS__.www, cleanedUrl);
          try {
            fs.accessSync(sitePath);
            return false;
          } catch (e) {
            return true;
          }
        });
      // Only pass the file through if contained broken links
      if (urls.length) {
        next(null, { file, urls });
      } else {
        next(null, null);
      }
    }))
    .pipe(report())
);
