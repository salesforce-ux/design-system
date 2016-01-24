/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import './scripts/helpers/setup';

import _ from 'lodash';
import browserSync, { reload } from 'browser-sync';
import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import './scripts/gulp/assets';
import './scripts/gulp/generate';
import './scripts/gulp/lint';
import './scripts/gulp/pages';
import './scripts/gulp/styles';
import { getConfig as getWebpackConfig } from './scripts/gulp/webpack';

const watchPaths = {
  sass: [
    path.resolve(__PATHS__.site, 'assets/styles/**/*.scss'),
    path.resolve(__PATHS__.ui, '**/*.scss')
  ],
  pages: [
    path.resolve(__PATHS__.ui, '**/*.{md,yml}')
  ],
  js: [
    'app_modules/**/*.{js,jsx}',
    path.resolve(__PATHS__.ui, '**/*.{js,jsx}'),
    path.resolve(__PATHS__.site, '**/*.{js,jsx}')
  ]
};

gulp.task('clean', del.bind(null, [
  __PATHS__.www,
  __PATHS__.generated,
  __PATHS__.tmp,
  __PATHS__.dist
]));

gulp.task('serve', () => {
  const webpackConfig = getWebpackConfig();
  const webpackCompiler = webpack(webpackConfig);

  browserSync({
    server: {
      baseDir: __PATHS__.www,
      middleware: [
        // Use webpackDevMiddleware instead of gulp.watch because webpack can figure out
        // when dependencies have changed and then rebuild
        webpackDevMiddleware(webpackCompiler, {
          publicPath: webpackConfig.output.publicPath
        })
      ]
    },
    notify: false,
    open: false,
    // Disable ghost mode as it creates unexpected cross-iframe interactions
    // Fixes an issue where clicking a label in component A
    // scrolls down to component B
    ghostMode: false
  });

  // Reload after each rebuild
  webpackCompiler.plugin('done', stats => reload());

  gulp.watch(watchPaths.sass, ['styles']);

  // Only lint every 10s
  // so they don't take CPU time away from compilation tasks
  gulp.watch(watchPaths.js, { debounceDelay: 10000 }, ['lint:js']);
  gulp.watch(watchPaths.sass, { debounceDelay: 10000 }, ['lint:sass']);
  gulp.watch(
    [watchPaths.sass, watchPaths.js, watchPaths.pages],
    { debounceDelay: 10000 },
    ['lint:spaces']
  );

  gulp.watch('.www/assets/styles/slds.css', { debounceDelay: 10000 }, ['stylestats']);
});

gulp.task('default', callback => {
  runSequence(
    'clean', 'styles', ['assets', 'generate'], 'pages', 'serve',
  callback);
});

gulp.task('build', callback => {
  runSequence(
    'clean', 'styles:prod', ['assets', 'generate'], ['pages', 'webpack'],
  callback);
});
