/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import './scripts/helpers/setup';

import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import runSequence from 'run-sequence';
import _ from 'lodash';
import webpack from 'webpack';
import del from 'del';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import minifycss from 'gulp-minify-css';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import browserSync, { reload } from 'browser-sync';
import StyleStats from 'stylestats';

import './scripts/lint';
import runSiteTasks from './scripts/tasks';
import { watch as watchWebpack } from './scripts/tasks/site/webpack';
import { createPageCompiler } from './scripts/tasks/site/compile';

const pageCompiler = createPageCompiler();

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

gulp.task('pages', callback => {
  runSiteTasks({
    tasks: ['generate', 'pages', 'assets']
  }, callback);
});

gulp.task('stylestats', () => {
  const file = '.www/assets/styles/slds.css';
  const c = gutil.colors;
  const logPrefix = `[${c.cyan(path.basename(file))}] `;
  const stats = new StyleStats(file);

  stats.parse((error, result) => {
    let sizeColor = 'green';

    switch (true) {
    case (result.size > 200 * 1024):
      sizeColor = 'bgred';
      break;
    case (result.size > 160 * 1024 && result.size <= 200 * 1024):
      sizeColor = 'yellow';
      break;
    }

    gutil.log(logPrefix + c[sizeColor](`Size: ${(result.size / 1024).toFixed(2)}KB (${(result.gzippedSize / 1024).toFixed(2)}KB gzipped)`));
    gutil.log(`${logPrefix}Rules: ${result.rules} | Selectors: ${result.selectors}`);
  });
});

function rebuildPage(event, done = _.noop) {
  let sitemap = require('./app_modules/site/navigation/sitemap').default;
  let routes = sitemap.getFlattenedRoutes().filter(route => route.component);
  routes.forEach(route => {
    if (new RegExp(_.escapeRegExp(route.component.path)).test(event.path)) {
      // Recreate the component module which will cause webpack
      // to recompile and reload the browser
      console.time(`rebuild "${route.uid}"`)
      pageCompiler.createComponentPages([route], err => {
        console.timeEnd(`rebuild "${route.uid}"`)
        if (err) return gutil.log(err);
        done(err);
      });
    }
  });
}

gulp.task('styles', () => {
  gulp.src('site/assets/styles/*.scss')
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
  .pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('clean', del.bind(null, [
  __PATHS__.www,
  __PATHS__.generated,
  __PATHS__.tmp,
  __PATHS__.dist
]));

gulp.task('serve', ['styles'], () => {
  browserSync({
    server: __PATHS__.www,
    notify: false,
    open: false,
    // Disable ghost mode as it creates unexpected cross-iframe interactions
    // Fixes an issue where clicking a label in component A
    // scrolls down to component B
    ghostMode: false
  });

  gulp.watch(watchPaths.pages).on('change', rebuildPage);

  // Use webpack.watch instead of gulp.watch because webpack can figure out
  // when dependencies have changed and then rebuild
  watchWebpack(null, reload);

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
    'clean', ['styles'], 'pages', 'serve',
  callback);
});
