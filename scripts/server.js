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
import _ from 'lodash';
import browserSync from 'browser-sync';
import browserSyncConsole from 'app_modules/util/browser-sync-console';
import minimist from 'minimist';
import watch from 'glob-watcher';
import gulp from 'gulp';

import siteSass from './tasks/site/sass';
import { createPageCompiler } from './tasks/site/compile';
import { watch as compileWebpack } from './tasks/site/webpack';

const argv = minimist(process.argv.slice(2));
const bs = browserSync.create();
const pageCompiler = createPageCompiler();

let watchTasks = argv.watch === true ? ['webpack', 'sass'] : [];

if (_.isString(argv.watch)) {
  watchTasks = argv.watch.split(',').map(_.trim);
}

const availableTasks = {
  webpack: function() { watchWebpack(); },
  sass: function() {
    console.log('Watching Sass…');
    gulp.watch([
      path.resolve(__PATHS__.site, 'assets/styles/**/*.scss'),
      path.resolve(__PATHS__.ui, '**/*.scss')
    ], event => {
      console.time('Sass Duration');
      siteSass(error => {
        if (error) {
          console.log(error);
        } else {
          console.timeEnd('Sass Duration');
          bs.reload();
        }
      });
    });
  }
};

/**
 * Start BrowserSync Server
 * @param  {array} tasks
 */
function startServer(tasks) {
  tasks.forEach(function(task) {
    availableTasks[task].call();
  });

  bs.use(browserSyncConsole);
  bs.init({
    injectChanges: false,
    scrollProportionally: false,
    ghostMode: false,
    files: false,
    notify: false,
    open: false,
    port: 3000,
    server: {
      baseDir: __PATHS__.www
    },
    snippetOptions: {
      blacklist: ['/components/preview-frame']
    }
  });
}

/**
 *
 */
function watchComponents() {
  console.log('Watching Components…');

  watch([
    path.resolve(__PATHS__.ui, '**/*.{md,yml}')
  ]).on('change', e => {
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
  });
}

/**
 * Compile and watch webpack
 *
 * @param {function} callback - called after the first compile
 */
function watchWebpack(callback) {
  const done = _.once(() => {
    watchComponents();
    callback();
  });
  compileWebpack({}, (err, stats) => {
    if (err) throw err;
    done();
    // If there were errors
    if (stats.errors.length) {
      // Log each one to the browser and DONT reload the page
      stats.errors.forEach(error => {
        browserSyncConsole.error(error);
      });
    } else {
      // Othewise reload the page
      bs.reload();
    }
  });
}

/**
 * If webpack was specified, let it compile once before starting the server
 */
if (watchTasks.includes('webpack')) {
  _.pull(watchTasks, 'webpack');
  watchWebpack(() => {
    startServer(watchTasks);
  });
} else {
  startServer(watchTasks);
}
