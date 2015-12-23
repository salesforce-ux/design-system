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
import runSequence from 'run-sequence';
import _ from 'lodash';
import webpack from 'webpack';
import del from 'del';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'gulp-autoprefixer';
import minifycss from 'gulp-minify-css';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import browserSyncConsole from './app_modules/util/browser-sync-console';

import path from 'path';
import './scripts/helpers/setup';
import './scripts/lint';
import { getConfig as webpackConfig } from './scripts/tasks/site/webpack';
import { createPageCompiler } from './scripts/tasks/site/compile';


const webpackCompiler = webpack(webpackConfig());
const pageCompiler = createPageCompiler();
const reload = browserSync.reload;

gulp.task('js', (callback) => {
  webpackCompiler.run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build-dev', err);
    }

    gutil.log('[js]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('styles', () => {
  gulp.src('site/assets/styles/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass.sync({
    outputStyle: 'compressed',
    precision: 10,
    includePaths: [
      __PATHS__.root,
      __PATHS__.ui,
      __PATHS__.node_modules
    ]
  }).on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('.www/assets/styles'))
  .pipe(browserSync.stream({ match: '**/*.css' }));
});

// TODO: replace /scripts/clean.js with this task and include it before
// but first, `gulp build` needs to work without having to run `npm run build` before
gulp.task('clean', del.bind(null, [
  __PATHS__.www,
  __PATHS__.generated,
  __PATHS__.tmp,
  __PATHS__.dist
]));

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

gulp.task('serve', ['styles'], function() {
  browserSync.use(browserSyncConsole);
  browserSync(null, {
    notify: false,
    server: '.www',
    port: 3000
  });

  gulp.watch(watchPaths.pages)
  .on('change', e => {
    let sitemap = require('app_modules/site/navigation/sitemap').default;
    let routes = sitemap.getFlattenedRoutes().filter(route => route.component);
    routes.forEach(route => {
      if (new RegExp(_.escapeRegExp(route.component.path)).test(e.path)) {
        // Recreate the component module which will cause webpack
        // to recompile and reload the browser
        pageCompiler.createComponentPage(route, route.component, err => {
          if (err) return console.log(err);
        });
      }
    });
    reload();
  });

  gulp.watch(watchPaths.js, ['js'], reload);

  gulp.watch(watchPaths.sass, ['styles']);
});

gulp.task('default', function(cb) {
  runSequence(
    // FIXME: Cleaning won't work: a full `npm run build` is needed
    // 'clean',
    ['lint', 'styles', 'js'],
  cb);
});
