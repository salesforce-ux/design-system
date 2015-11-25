/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs';
import assert from 'assert';

import _ from 'lodash';
import async from 'async';
import browserSync from 'browser-sync';
import browserSyncConsole from 'app_modules/util/browser-sync-console';
import cheerio from 'cheerio';
import gulp from 'gulp';
import gutil from 'gulp-util';
import MD5 from 'md5';
import minimist from 'minimist';
import { createLocation } from 'history';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, Link, match as RouterMatch, RoutingContext } from 'react-router';

import rename from 'gulp-rename';
import through from 'through2';
import watch from 'glob-watcher';
import webpack from 'webpack';

import createComponent from 'app_modules/site/util/component/create';
import { compileSass } from './sass';
import ignoreUnderscore from 'app_modules/util/ignore-underscore';
import { getDefaultEnvVars } from 'scripts/helpers/env'

const argv = minimist(process.argv.slice(2));
const isDev = argv.dev === true;
const isProd = argv.prod === true;
const isInternal = argv.internal === true;

const eslintExclude = new RegExp([
  __PATHS__.node_modules,
  __PATHS__.generated,
  __PATHS__.tmp
].map(_.escapeRegExp).join('|'));

/**
 * BrowserSync instance
 */
const bs = browserSync.create();

/**
 * Start BrowserSync
 */
function browserSyncStart() {
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
 * Return a props object with only props prefixed
 * and then strip the prefix
 *
 * @params {object} props
 * @params {string} prefix
 * @returns {object}
 */
export function getPrefixedProps(props, prefix) {
  assert.ok(_.isObject(props), 'props must be an object');
  assert.ok(_.isString(prefix), 'prefix must be a string');
  const pattern = new RegExp(`^${_.escapeRegExp(prefix)}`);
  const prefixedProps = _.pick(props, (value, key) => pattern.test(key));
  return _.mapKeys(prefixedProps, (value, key) => {
    return _.camelCase(key.replace(pattern, ''));
  });
}

/**
 * Cleanup webpack error messages and then log them to the console
 *
 * @param {object} stats
 * @returns {object}
 */
function webpackLogStats(stats) {
  stats = stats.toJson();
  if (stats.errors.length) {
    stats.errors = stats.errors.map(function(error) {
      return _.last(error.split('!'));
    });
    stats.errors.forEach(function(error) {
      console.log(error);
    });
  }
  return stats;
}

/**
 * Return a string that represents an attempt to require a module
 *
 * @param {string} cache - the name of the cache objecrt
 * @param {string} cacheKey
 * @param {string} modulePath - the path to require
 * @returns {string}
 */
export function tryRequire(cache, cacheKey, modulePath) {
  assert.ok(_.isString(cache), 'cache must be a string');
  assert.ok(_.isString(cacheKey), 'cacheKey must be a string');
  assert.ok(_.isString(modulePath), 'modulePath must be a string');
  return `try { ${cache}['${cacheKey}'] = require('${modulePath}'); } catch(e) {}`;
}

/**
 * The webpack configuration
 */
export const webpackConfig = {
  context: __dirname,
  entry: {
    // Should not be directly imported
    site: path.resolve('app_modules/site/browser/site'),
    // TODO: Figure out how to use CommonsChunkPlugin and bundle-loader together
    common: [
      'app_modules/site/components/cta-link',
      'app_modules/site/components/page/anchor',
      'app_modules/site/components/page/body',
      'app_modules/site/components/page/component',
      'app_modules/site/components/sticky',
      'app_modules/site/navigation/navigation',
      'app_modules/site/navigation/navigation-utils',
      'app_modules/site/navigation/sitemap',
      'app_modules/site/navigation/sitemap-utils',
      'app_modules/site/shared',
      'app_modules/site/util/analytics'
    ],
    vendor: [
      'app_modules/site/vendor/prism',
      'classnames',
      'immutable',
      'js-beautify',
      'lodash',
      'react',
      'react-dom',
      'react-dom/server',
      'react-lorem-component',
      'react-router',
      'tinycolor2'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__PATHS__.www, 'assets/scripts'),
    publicPath: '/assets/scripts/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: '{ compact: false }'
      },
      {
        test: /\.jsx?$/,
        loader: path.resolve('app_modules/util/license-loader/index.js'),
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: eslintExclude,
        loader: 'eslint-loader'
      }
    ],
    noParse: [
      /\.generated/,
      /immutable\/immutable\.js/,
      /lodash\/index\.js/,
      /react\/dist\/react\.js/
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __PATHS__.root,
    alias: {
      'immutable$': path.resolve(__PATHS__.node_modules, 'immutable/dist/immutable.js'),
      'react$': path.resolve(__PATHS__.node_modules, 'react/dist/react.js'),
      'react-dom$': path.resolve(__PATHS__.node_modules, 'react-dom/dist/react-dom.js'),
      'react-dom/server$': path.resolve(__PATHS__.node_modules, 'react-dom/dist/react-dom-server.js')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': _(process.env)
        .pick(_.keys(getDefaultEnvVars()))
        .mapValues(value => `"${value}"`)
        .value()
    })
  ],
  cache: {},
  eslint: {
    configFile: path.resolve(__PATHS__.root, '.eslintrc')
  }
};

/**
 *
 */
export const compiler = {

  init() {
    _.bindAll(this, _.functions(this));
  },

  getSitePath() {
    return path.resolve(__PATHS__.site, ...arguments);
  },

  getSitePathTmp() {
    return path.resolve(__PATHS__.tmp, 'site', ...arguments);
  },

  /**
   * Create a module for each page in the site
   *
   * @param {function} callback
   */
  createPages(callback) {
    assert.ok(_.isFunction(callback), 'callback must be a function');
    console.log('-----> Creating Pages');
    let sitemap = require('app_modules/site/navigation/sitemap').default;
    let routes = sitemap.getFlattenedRoutes().filter(route => !route.component);
    let stream = through.obj();
    routes.forEach(stream.write, stream);
    stream.end();
    stream
    .pipe(through.obj(this.createPage))
    .pipe(gulp.dest(this.getSitePathTmp()))
    .on('error', callback)
    .on('finish', callback);
  },

  /**
   * Create a module that exports a page with extra props
   *
   * @param {object} route
   * @param {string} enc
   * @param {function} next
   */
  createPage(route, enc, next) {
    // Props
    const pageBodyProps = {
      url: route.path
    };
    // Create the module
    const contents = `
      import React from 'react';
      import pageBody from 'site/${route.modulePath}';
      export default React.cloneElement(
        pageBody,
        ${JSON.stringify(pageBodyProps)}
      );
    `;
    let file = new gutil.File({
      path: route.getIndexPath(route.path),
      contents: new Buffer(contents)
    });
    next(null, file);
  },

  /**
   * Create a module for each component
   *
   * @param {function} callback
   */
  createComponentPages(callback) {
    console.log('-----> Creating Component Pages');
    let sitemap = require('app_modules/site/navigation/sitemap').default;
    let routes = sitemap.getFlattenedRoutes().filter(route => {
      return route.component;
    });
    let stream = through.obj();
    routes.forEach(stream.write, stream);
    stream.end();
    stream
      .pipe(through.obj(this.createComponentPage))
      .pipe(gulp.dest(this.getSitePathTmp()))
      .on('error', callback)
      .on('finish', callback);
  },

  /**
   * Create a module for a component
   *
   * @param {object} route
   * @param {string} enc
   * @param {function} next
   */
  createComponentPage(route, enc, next) {
    let component = createComponent(route.component);
    // Imports
    let requireDocs = tryRequire('elements', 'docs', `ui/${component.path}/index.docs.jsx`);
    let requireExamples = component.flavors.map(flavor => {
      return tryRequire('elements', `example/flavor/${flavor.id}`,
        `ui/${flavor.path}/index.react.example.jsx`);
    }).join('\n');
    // Props
    let bodyProps = {
      url: route.path,
      contentClassName: false
    };
    // Create the module
    let contents = `
      import React from 'react';
      import PageBody from 'app_modules/site/components/page/body';
      import ComponentBody from 'app_modules/site/components/page/component';
      const bodyProps = ${JSON.stringify(bodyProps)};
      const component = ${JSON.stringify(component)};
      const elements = {};
      ${requireDocs}
      ${requireExamples}
      export default <PageBody {...bodyProps}>
        <ComponentBody component={component} elements={elements} />
      </PageBody>;
    `;
    let file = new gutil.File({
      path: route.getIndexPath(route.path),
      contents: new Buffer(contents)
    });
    next(null, file);
  },

  /**
   * Transform page routes into an HTML string
   *
   * @param {array} routes
   * @param {object} route
   * @param {string} enc
   * @param {function} next
   */
  renderPage(routes, route, enc, next) {
    try {
      console.log('-----> Rendering page ' + route.path);
      let newFile = new gutil.File({
        path: route.getIndexPath(route.path)
      });
      // Get the <PageBody />
      let pageBodyProps = {
        url: route.path
      };
      let pageBody = React.cloneElement(
        require(this.getSitePathTmp(route.trimSlashes(route.path)))
      , pageBodyProps);
      // Get the <Page />
      let Page = require('app_modules/site/components/page');
      let pageProps = getPrefixedProps(pageBody.props, 'page');
      let page = React.createElement(Page, pageProps);
      // Create a cheerio instance from the <Page /> markup string
      let $ = cheerio.load(ReactDOMServer.renderToStaticMarkup(page));
      // Router
      let location = createLocation(route.path);
      RouterMatch({ routes, location }, (error, redirectLocation, renderProps) => {
        if (error) {
          throw error;
        }
        let html = ReactDOMServer.renderToString(
          React.createElement(RoutingContext, renderProps)
        );
        $('#app').append(html);
        $('body').append(`<script>LIGHTNING_DESIGN_SYSTEM.init('${route.modulePath}')</script>`);
        $('html').before('<!DOCTYPE html>');
        newFile.contents = new Buffer($.html());
        next(null, newFile);
      });
    } catch (e) {
      next(e);
    }
  },

  /**
   * Create the routes needed to render the pages statically
   * and then stream the metadata through the renderPage() function
   *
   * @param {function} callback
   */
  renderPages(callback) {
    console.log('-----> Rendering Pages');
    let sitemap = require('app_modules/site/navigation/sitemap').default;
    // Needed for ReactRouter
    let Root = React.createClass({
      render() { return this.props.children; }
    });
    // Create the routes
    let routes = sitemap.getFlattenedRoutes().map(route => {
      let page = require(this.getSitePathTmp(route.getIndexPath(route.path))).default;
      let Page = React.createClass({
        render() {
          return page;
        }
      });
      return React.createElement(Route, {
        name: route.uid,
        path: route.path,
        component: Page
      });
    });
    routes = React.createElement(Route, {
      component: Root
    }, ...routes);
    // Render each page
    let stream = through.obj();
    sitemap.getFlattenedRoutes().forEach(stream.write, stream);
    stream.end();
    stream
    .pipe(through.obj(this.renderPage.bind(this, routes)))
    .on('error', callback)
    .pipe(rename(path => path.extname = '.html'))
    .on('error', callback)
    .pipe(gulp.dest(__PATHS__.www))
    .on('error', callback)
    .on('finish', callback);
  },

  /**
   * Tasks that need to be run before webpack compiles
   *
   * @param {function} callback
   */
  preCompile(callback) {
    async.parallel([
      this.createPages,
      this.createComponentPages
    ], callback);
  },

  /**
   * Compile webpack
   *
   * @param {function} callback
   */
  compile(callback) {
    console.log('-----> Compiling Webpack');
    callback = _.once(callback);
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: ['common', 'vendor'],
        minChunks: Infinity
      })
    );
    if (isProd && process.env.TRAVIS !== true) {
      webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }
    // Create the compiler
    const compiler = webpack(webpackConfig);
    // Dev / Prod
    if (isDev) {
      compiler.watch(100, (err, stats) => {
        if (err) throw err;
        stats = webpackLogStats(stats);
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
        callback();
      });
    } else {
      compiler.run((err, stats) => {
        webpackLogStats(stats);
        return callback(err, stats);
      });
    }
  }

}

compiler.init();

/**
 * GO!
 */
export default function (done) {

  console.log('Compiling Site');

  async.series([
    compiler.preCompile,
    compiler.compile,
    compiler.renderPages
  ], err => {
    if (err) return done(err);
    if (isDev) browserSyncStart();
    done(err);
  });

  /**
   * Watch for changes
   */
  if (isDev) {
    // UI (for files that are not directly required by webpack)
    watch([
      path.resolve(__PATHS__.ui, '**/*.{md,yml}')
    ]).on('change', e => {
      let sitemap = require('app_modules/site/navigation/sitemap').default;
      let routes = sitemap.getFlattenedRoutes().filter(route => route.component);
      routes.forEach(route => {
        if (new RegExp(_.escapeRegExp(route.component.path)).test(e.path)) {
          // Recreate the component module which will cause webpack
          // to recompile and reload the browser
          compiler.createComponentPage(route, route.component, err => {
            if (err) return console.log(err);
          });
        }
      });
    });
    // Sass
    watch([
      path.resolve(__PATHS__.site, '**/*.scss'),
      path.resolve(__PATHS__.ui, '**/*.scss')
    ]).on('change', e => {
      compileSass(e, err => {
        if (!err) bs.reload();
      });
    });
  }

}
