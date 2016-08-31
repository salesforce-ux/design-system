/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import async from 'async';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import theo from 'theo';
import concat from 'gulp-concat';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import rename from 'gulp-rename';
import through from 'through2';
import _ from 'lodash';

let formatTransforms = _({
  'web': [
    'styl',
    'less',
    // 'sass',
    // 'default.sass',
    'scss',
    'default.scss',
    'map.scss',
    // 'map.variables.scss',
    // 'html',
    'json',
    'common.js',
    // 'amd.js',
    // 'aura.theme',
    'aura.tokens'
  ],
  'ios': ['ios.json'],
  'android': ['android.xml']
}).map((formats, transform) =>
  formats.map((name) => ({
    name: name,
    transform: transform
  }))
).flatten().value();

gulp.task('generate:tokens:all', ['generate:tokens:components:imports'], (done) => {
  const convert = ({name, transform}, done) =>
    gulp.src(path.resolve(__PATHS__.designTokens, '*.yml'))
      .pipe(theo.plugins.transform(transform))
      .pipe(theo.plugins.format(name))
      .pipe(gulp.dest(path.resolve(__PATHS__.designTokens, 'dist')))
      .on('finish', done);
  async.each(formatTransforms, convert, done);
});

gulp.task('generate:tokens:sass:default', ['generate:tokens:components:imports'], () =>
  gulp.src(path.resolve(__PATHS__.designTokens, '*.yml'))
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('default.scss'))
    .pipe(gulp.dest(path.resolve(__PATHS__.designTokens, 'dist'))));

gulp.task('generate:tokens:sass:map', ['generate:tokens:components:imports'], () =>
  gulp.src(path.resolve(__PATHS__.designTokens, '*.yml'))
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('map.scss'))
    .pipe(gulp.dest(path.resolve(__PATHS__.designTokens, 'dist'))));

gulp.task('generate:tokens:sass', ['generate:tokens:sass:default', 'generate:tokens:sass:map']);

gulp.task('generate:tokens:components:imports', (done) =>
  gulp.src(path.resolve(__PATHS__.ui, 'components/**/tokens/**/*.yml'))
    .pipe(gutil.buffer())
    .pipe(through.obj((files, enc, next) => {
      const componentTokenImports = files.reduce((prev, file) =>
          `${prev}\n- ${path.relative(__PATHS__.designTokens, file.path)}`
        , '# File generated automatically, do not edit manually\nimports:');
      const file = new gutil.File({
        path: 'components.yml',
        contents: new Buffer(componentTokenImports)
      });
      next(null, file);
    }))
    .pipe(gulp.dest(__PATHS__.designTokens))
);
