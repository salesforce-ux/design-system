/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs-extra';

import _ from 'lodash';
import async from 'async';
import autoprefixer from 'autoprefixer';
import gulp from 'gulp';
import sass from 'gulp-sass';
import gutil from 'gulp-util';
import minimist from 'minimist';
import postcss from 'gulp-postcss';
import minifycss from 'gulp-minify-css';

const argv = minimist(process.argv.slice(2));
const isProd = argv.prod === true;

export default function(done) {
  console.log('Compiling Sass');

  gulp.src(path.resolve(__PATHS__.site, 'assets/styles/*.scss'))
    .pipe(sass({
      outputStyle: 'nested',
      sourceComments: isProd ? false : true,
      includePaths: [
        __PATHS__.root,
        __PATHS__.ui,
        __PATHS__.node_modules
      ]
    }))
    .on('error', sass.logError)
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .on('error', done)
    .pipe(isProd ? minifycss({ advanced: false }) : gutil.noop())
    .on('error', done)
    .pipe(gulp.dest('./.www/assets/styles'))
    .on('error', done)
    .on('finish', done);
}
