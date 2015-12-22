/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';


import path from 'path';
import './scripts/helpers/setup';
import './scripts/lint';
import { getConfig as webpackConfig } from './scripts/tasks/site/webpack';

const webpackCompiler = webpack(webpackConfig());

gulp.task('site:webpack', (callback) => {
  webpackCompiler.run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError("webpack:build-dev", err);
    }
    gutil.log("[site:webpack]", stats.toString({
      colors: true
    }));
    callback();
  })
});

gulp.task('site:sass', () => {
  gulp.src(path.resolve(__PATHS__.site, 'assets/styles/*.scss'))
    .pipe(sass({
      outputStyle: 'compressed',
      sourceComments: true,
      includePaths: [
        __PATHS__.root,
        __PATHS__.ui,
        __PATHS__.node_modules
      ]
    }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('./.www/assets/styles'));
});


gulp.task('watch:webpack', () => {
  gulp.watch([
    'app_modules/**/*.{js,jsx}',
    'ui/**/*.{js,jsx}',
    'site/**/*.{js,jsx}'
  ], ['site:webpack'])
});

gulp.task('watch:sass', () => {
  gulp.watch([
    path.resolve(__PATHS__.site, 'assets/styles/**/*.scss'),
    path.resolve(__PATHS__.ui, '**/*.scss')
  ], ['site:sass'])
});

gulp.task('watch', ['watch:sass', 'watch:webpack']);

gulp.task('default', ['lint']);
