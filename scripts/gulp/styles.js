/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import '../helpers/setup';

import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import gutil from 'gulp-util';
import minifycss from 'gulp-minify-css';
import path from 'path';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import StyleStats from 'stylestats';

const sign = x => (x < 0) ? '' : '+';

Number.prototype.toKB = function () {
  return (this / 1024).toFixed(2);
};

gulp.task('stylestats', done => {
  const localFile = '.www/assets/styles/slds.css';
  const remoteFile = 'https://www.lightningdesignsystem.com/assets/styles/slds.css';

  const localStats = new StyleStats(localFile, '.stylestatsrc');
  const remoteStats = new StyleStats(remoteFile, '.stylestatsrc');
  const remote = {};

  remoteStats.parse((error, result) => {
    remote.size = result.size;
    remote.gzippedSize = result.gzippedSize;
    remote.rules = result.rules;
    remote.selectors = result.selectors;

    localStats.parse((error, result) => {
      const diff = {};

      diff.size = result.size - remote.size;
      diff.gzippedSize = result.gzippedSize - remote.gzippedSize;
      diff.rules = result.rules - remote.rules;
      diff.selectors = result.selectors - remote.selectors;

      gutil.log(gutil.colors.green(`slds.scss (minified):
            ${result.size.toKB()}KB (${result.gzippedSize.toKB()}KB gzipped)`));

      gutil.log(gutil.colors.gray(`That's ${sign(diff.size)}${diff.size.toKB()}KB (${sign(diff.gzippedSize)}${diff.gzippedSize.toKB()}KB gzipped) than the current public version.`));

      gutil.log(`Additional stats:
            Rules: ${result.rules} (${sign(diff.rules)}${diff.rules})
            Selectors: ${result.selectors} (${sign(diff.selectors)}${diff.selectors})`);
      done(error, result);
    });
  });
});

gulp.task('styles', () =>
  gulp
    .src('site/assets/styles/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      precision: 10,
      includePaths: [
        __PATHS__.root,
        __PATHS__.ui,
        __PATHS__.node_modules
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(minifycss({ advanced: false }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.www/assets/styles'))
    .pipe(browserSync.stream({ match: '**/*.css' }))
);
