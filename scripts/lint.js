/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import './helpers/setup';

import path from 'path';
import gulp from 'gulp';
import cache from 'gulp-cached';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import lintspaces from 'gulp-lintspaces';
import eslint from 'gulp-eslint';
import eslintPathFormatter from 'eslint-path-formatter';
eslintPathFormatter.editor('sublime');
import scsslint from 'gulp-scss-lint';
import browserSync from 'browser-sync';
const reload = browserSync.reload;

gulp.task('lint:sass', () =>
  gulp.src([
    'site/assets/styles/**/*.scss',
    'ui/**/*.scss'
  ])
  .pipe(cache('linting'))
  .pipe(scsslint({
    bundleExec: true
  }))
);

gulp.task('lint:spaces', () =>
  gulp.src([
    '*.{js,json,md,yml,txt}',
    '.*',
    '!.DS_Store',
    'ui/**/*.*',
    'site/**/*.{js,jsx,sh,scss,yml,md,xml}',
    'scripts/**/*.{js,sh,jsx}'
  ])
  .pipe(cache('linting'))
  .pipe(lintspaces({
    editorconfig: '.editorconfig',
    ignores: [
      /\/\*[\s\S]*?\*\//g // Ignore comments
    ]
  }))
  .pipe(lintspaces.reporter())
);

function lintjs(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(cache('linting'))
      .pipe(reload({stream: true, once: true}))
      .pipe(eslint(options))
      .pipe(eslint.format(eslintPathFormatter))
      .pipe(gulpif(!browserSync.active, eslint.failAfterError()));
  };
}

gulp.task('lint:js', lintjs([
  '*.js',
  'app_modules/**/*.{js,jsx}',
  'scripts/**/*.{js,jsx}',
  'site/**/*.{js,jsx}',
  'ui/**/*.{js,jsx}',
  '!**/*.spec.js'
]));

gulp.task('lint:js:test', lintjs([
  'test/**/*.{js,jsx}',
  '**/*.spec.js'],
  {env: {mocha: true}}
));

gulp.task('lint', ['lint:sass', 'lint:spaces', 'lint:js']);
