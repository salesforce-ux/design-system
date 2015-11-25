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
import gutil from 'gulp-util';
import lintspaces from 'gulp-lintspaces';
import eslint from 'gulp-eslint';
import eslintPathFormatter from 'eslint-path-formatter';
eslintPathFormatter.editor('sublime');
import scsslint from 'gulp-scss-lint';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

// Set default linters
const defaultLinters = 'spaces,js';
// Did the user override linters?
// e.g. `npm run lint -- --linters sass,js`
const linters = argv.linters || defaultLinters;

// Assign linters to gulp tasks
const isLinterActive = linter => linters.indexOf(linter) > -1;
const tasks = ['sass', 'js', 'spaces'].filter(isLinterActive);

const rootPath = p => path.resolve(__PATHS__.root, p);

gulp.task('sass', () =>
  gulp.src([
    'ui/**/*.scss',
    '!ui/vendor/**/*',
    'site/assets/styles/**/*.scss',
    '!site/assets/styles/_vendor/**/*'
  ], { cwd: __PATHS__.root })
  .pipe(
    scsslint({
      'config': rootPath('.scss-lint.yml'),
      'bundleExec': true
    })
  )
);

gulp.task('spaces', () =>
  gulp.src([
    '*.{js,json,md,yml,txt}',
    '.*',
    '!.DS_Store',
    'ui/**/*.*',
    'site/**/*.{js,jsx,sh,scss,yml,md,xml}',
    'scripts/**/*.{js,sh,jsx}'
  ], { cwd: __PATHS__.root })
  .pipe(lintspaces({
    editorconfig: rootPath('.editorconfig'),
    ignores: [
      /\/\*[\s\S]*?\*\//g // Ignore comments
    ]
  }))
  .pipe(lintspaces.reporter())
);

gulp.task('js', () =>
  gulp.src([
    '*.{js}',
    'ui/**/*.{js,jsx}',
    'site/**/*.{js,jsx}',
    'scripts/**/*.{js,jsx}'
  ], { cwd: __PATHS__.root })
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
  .pipe(eslint({
    options: {
      configFile: rootPath('.eslintrc')
    }
  }))
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
  .pipe(eslint.format(rootPath('node_modules/eslint-path-formatter')))
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  .pipe(eslint.failAfterError())
);

gulp.task('default', tasks);
