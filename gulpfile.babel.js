// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import './scripts/helpers/setup';

import _ from 'lodash';
import browserSync, { reload } from 'browser-sync';
import del from 'del';
import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import nconf from 'nconf';
nconf.formats.yaml = require('nconf-yaml');
import path from 'path';
import prettyTime from 'pretty-time';
import runSequence from 'run-sequence';
import url from 'url';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import express from 'express';

import { pathToURL } from 'app_modules/util/string';

import './scripts/gulp/assets';
import './scripts/gulp/generate';
import './scripts/gulp/accessibility';
import { generateUI } from './scripts/gulp/generate-ui';
import './scripts/gulp/lint';
import { generatePages, generateComponentPages } from './scripts/gulp/pages';
import './scripts/gulp/styles';
import { getConfig as getWebpackConfig } from './scripts/gulp/webpack';
import './scripts/gulp/links';
import {watchPaths, removeFromCache} from './scripts/watch';

// Configuration
nconf
  // Environment variables:
  // BROWSERSYNC__PORT=3005 npm start
  .env({
    separator: '__',
    lowerCase: true
  })
  // Command line arguments:
  // npm start -- --browsersync:port 3006
  .argv()
  // User configuration in a .sldsrc.yml file
  .file('user', { file: './.sldsrc.yml', format: nconf.formats.yaml })
  // Default configuration
  .file('defaults', { file: './.sldsrc.defaults.yml', format: nconf.formats.yaml });

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
 * Return a debounced function that will start a task every [wait] seconds
 *
 * @param {string} task
 * @param {int} [wait]
 * @returns function
 */
const debounceTask = (task, wait = 10000) =>
  _.debounce(() => gulp.start(task), wait, {
    leading: true,
    trailing: false
  });


/**
 * A middleware that will rebuild pages on demand
 */
const siteMiddleware = (req, res, next) => {
  // Check for pages "/some/page/", "some/page/index.html"
  const query = req.query || {};
  const ext = path.extname(req.url);
  if (!ext || ext === '.html' && !query.iframe) {
    // Remove <PageBody> from cache
    removeFromCache(require.resolve('app_modules/site/components/page/body'));
    // Clean the URL
    const url = req.url.replace(/^\//, '').replace(/\.html$/, '');
    // First, check for /components/*
    if (/components\//.test(url)) {
      const ui = generateUI();
      const log = SLDSLog();
      for (const category of ui) {
        for (const component of category.components) {
          const pattern = new RegExp(_.escapeRegExp(pathToURL(component.sitePath)));
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

gulp.task('clean', () => del.sync([
  __PATHS__.www,
  __PATHS__.generated,
  __PATHS__.tmp,
  __PATHS__.dist,
  __PATHS__.logs,
  __PATHS__.build,
  __PATHS__.reports,
  __PATHS__.html,
  path.join(__PATHS__.designTokens, 'dist')
]));

gulp.task('serve', () => {
  const webpackConfig = getWebpackConfig();
  const webpackCompiler = webpack(webpackConfig);

  // Use Express instead of Connect for BrowserSync
  const app = express();

  app.use(
    webpackDevMiddleware(
      webpackCompiler, {
        publicPath: webpackConfig.output.publicPath,
        quiet: nconf.get('webpack:quiet')
      }
    )
  );
  app.use(siteMiddleware);

  // Show a different favicon during development
  app.use('/favicons/*.png', (req, res, next) =>
    res.redirect('/favicon-dev.png'));

  const browserSyncConfig = {
    server: {
      baseDir: __PATHS__.www,
      middleware: [app]
    },
    notify: false,
    open: nconf.get('browsersync:open'),
    // Disable ghost mode as it creates unexpected cross-iframe interactions
    // Fixes an issue where clicking a label in component A
    // scrolls down to component B
    ghostMode: false
  };

  // The port can't be passed as false or null,
  // so we assign it separately, only if overriden
  if (nconf.get('browsersync:port')) {
    browserSyncConfig.port = nconf.get('browsersync:port');
  }

  browserSync(browserSyncConfig);

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
  gulp.watch(watchPaths.tokens, ['generate:tokens:components:imports', 'generate:tokens:ui']);

  // Only lint every 10s so tasks don't take CPU time away from compilation tasks
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
    'clean', 'generate:tokens:all', 'styles', ['assets', 'generate'], 'serve',
  callback);
});

gulp.task('build', callback => {
  runSequence(
    'clean', 'generate:tokens:all', 'styles', ['assets', 'generate'], ['pages', 'webpack'], ['links'],
  callback);
});
