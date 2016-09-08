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
import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import nconf from 'nconf';
import path from 'path';
import prettyTime from 'pretty-time';
import runSequence from 'run-sequence';
import url from 'url';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import { pathToURL } from 'app_modules/util/string';

import './scripts/gulp/assets';
import './scripts/gulp/generate';
import { generateUI } from './scripts/gulp/generate-ui';
import './scripts/gulp/lint';
import { generatePages, generateComponentPages } from './scripts/gulp/pages';
import './scripts/gulp/styles';
import { getConfig as getWebpackConfig } from './scripts/gulp/webpack';
import './scripts/gulp/links';

nconf.argv().file({
  file: './.sldsconfig'
}).defaults({
  'webpack-quiet': true,
  'browser-sync-open': false
});

const watchPaths = {
  sass: [
    'site/assets/styles/**/*.scss',
    'ui/**/*.scss'
  ],
  pages: [
    'ui/**/*.{md,yml}'
  ],
  js: [
    'app_modules/**/*.{js,jsx}',
    'ui/**/*.{js,jsx}',
    'site/**/*.{js,jsx}'
  ]
};

/**
 * Create function that logs a prefixed message with the process time
 *
 * @param {array} [hrtime]
 * @returns {function}
 */
const SLDSLog = (hrtime = process.hrtime()) => message =>
  console.log([
    `[${gutil.colors.red('♥')}${gutil.colors.yellow('⚡')}]`,
    message,
    `after ${gutil.colors.magenta(prettyTime(process.hrtime(hrtime)))}`
  ].join(' '));

/**
 * Return a debounced function that will start a task every wait seconds
 *
 * @param {string} task
 * @param {nuber} [wait]
 * @returns functions
 */
const debounceTask = (task, wait = 10000) =>
  _.debounce(() => gulp.start(task), wait, {
    leading: true,
    trailing: false
  });

/**
 * Remove a module from the cache
 *
 * @param {string} id
 */
const removeFromCache = (() => {
  const patterns = ['app_modules', 'site'].map(k =>
    new RegExp(_.escapeRegExp(path.resolve(__dirname, k))));
  const shouldRemove = id =>
    patterns.reduce((allow, pattern) => allow || pattern.test(id), false);
  return id => {
    const m = require.cache[id];
    if (m) {
      delete require.cache[id];
      let parent = m.parent;
      while (parent && shouldRemove(parent.id)) {
        delete require.cache[parent.id];
        parent = parent.parent;
      }
    }
  };
})();

/**
 * A middleware that will rebuild pages on demand
 */
const siteMiddleware = (req, res, next) => {
  // Check for pages "/some/page/", "some/page/index.html"
  const query = req.query || {};
  const ext = path.extname(req.url);
  if (!ext || ext === '.html' && !query.iframe) {
    // Remov <PageBody> from cache
    removeFromCache(require.resolve('app_modules/site/components/page/body'));
    // Clean the URL
    const url = req.url.replace(/^\//, '').replace(/\.html$/, '');
    // First, check for /components/*
    if (/components/.test(url)) {
      const ui = generateUI();
      const log = SLDSLog();
      for (const category of ui) {
        for (const component of category.components) {
          const pattern = new RegExp(_.escapeRegExp(pathToURL(component.path)));
          if (pattern.test(url)) {
            return generateComponentPages([component], err => {
              if (err) console.log(err.stack);
              log(`Rebuilt page "${gutil.colors.green(`/${url}`)}"`);
              next();
            });
          }
        }
      }
      // No component was found
      return next();
    }
    // Create a path to the source file
    const indexPath = path.join(__PATHS__.site, url, 'index.jsx');
    // Make sure the source file actually exists
    fs.access(indexPath, err => {
      // No page was found
      if (err) return next();
      // Rebuild
      const log = SLDSLog();
      generatePages([indexPath], err => {
        if (err) console.log(err.stack);
        log(`Rebuilt page "${gutil.colors.green(`/${url}`)}"`);
        next();
      });
    });
  } else {
    next();
  }
};

gulp.task('clean', del.bind(null, [
  __PATHS__.www,
  __PATHS__.generated,
  __PATHS__.tmp,
  __PATHS__.dist,
  __PATHS__.logs,
  __PATHS__.build
]));

gulp.task('serve', () => {
  const webpackConfig = getWebpackConfig();
  const webpackCompiler = webpack(webpackConfig);

  browserSync({
    server: {
      baseDir: __PATHS__.www,
      middleware: [
        // Serve /site pages on demand
        siteMiddleware,
        // Use webpackDevMiddleware instead of gulp.watch because webpack can figure out
        // when dependencies have changed and then rebuild
        webpackDevMiddleware(webpackCompiler, {
          publicPath: webpackConfig.output.publicPath,
          quiet: nconf.get('webpack-quiet')
        })
      ]
    },
    notify: false,
    open: nconf.get('browser-sync-open'),
    // Disable ghost mode as it creates unexpected cross-iframe interactions
    // Fixes an issue where clicking a label in component A
    // scrolls down to component B
    ghostMode: false
  });

  // Reload after each rebuild
  webpackCompiler.plugin('done', stats => reload());

  // When module files change, delete them from the cache
  // and then reload the browser which will trigger the middleware
  // to rebuild the page
  gulp.watch([
    ...watchPaths.js,
    ...watchPaths.pages
  ], event => {
    SLDSLog()(`File Changed ${event.path}`);
    removeFromCache(require.resolve(event.path));
    reload();
  });

  gulp.watch(watchPaths.sass, ['styles']);

  // Only lint every 10s so they don't take CPU time away from compilation tasks
  gulp.watch(
    watchPaths.js,
    debounceTask('lint:js')
  );
  gulp.watch(
    watchPaths.sass,
    debounceTask('lint:sass')
  );
  gulp.watch(
    [watchPaths.sass, watchPaths.js, watchPaths.pages],
    debounceTask('lint:spaces')
  );
});

gulp.task('default', callback => {
  runSequence(
    'clean', 'styles', ['assets', 'generate'], 'serve',
  callback);
});

gulp.task('build', callback => {
  runSequence(
    'clean', 'styles', ['assets', 'generate'], ['pages', 'webpack'], ['links'],
  callback);
});
