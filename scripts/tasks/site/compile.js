/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import assert from 'assert';

import _ from 'lodash';
import async from 'async';
import cheerio from 'cheerio';
import gulp from 'gulp';
import grename from 'gulp-rename';
import gutil from 'gulp-util';
import { createLocation } from 'history';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, Link, match as RouterMatch, RoutingContext } from 'react-router';
import through from 'through2';

import createComponent from 'app_modules/site/util/component/create';

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
 *
 */
function writeFiles (dest, options = {}) {
  _.defaults(options, {
    pipes: []
  });
  return (files, done) => {
    let stream = through.obj();
    files.forEach(stream.write, stream);
    stream.end();
    stream = options.pipes.reduce((stream, pipe) => {
      stream = stream.pipe(pipe);
      stream.on('error', done);
      return stream;
    }, stream);
    stream
    .pipe(gulp.dest(dest))
    .on('error', done)
    .on('finish', done);
  }
}

/**
 *
 */
export function createPageCompiler () {

  const compiler = {

    getSitePath () {
      return path.resolve(__PATHS__.site, ...arguments);
    },

    getSitePathTmp () {
      return path.resolve(__PATHS__.tmp, 'site', ...arguments);
    },

    /**
     * Create a module for each page in the site
     *
     * @param {function} done
     */
    createPages (done) {
      console.time('createPages');
      assert.ok(_.isFunction(done), 'callback must be a function');
      let sitemap = require('app_modules/site/navigation/sitemap').default;
      let routes = sitemap.getFlattenedRoutes()
        .filter(route => !route.component);
      async.waterfall([
        (callback) =>
          async.map(routes, this.createPage, callback),
        writeFiles(this.getSitePathTmp())
      ], err => {
        console.timeEnd('createPages');
        done(err);
      });
    },

    /**
     * Create a module that exports a page with extra props
     *
     * @param {object} route
     * @param {function} done
     */
    createPage (route, done) {
      //console.time(`createPage: ${route.path}`);
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
      //console.timeEnd(`createPage: ${route.path}`);
      done(null, file);
    },

    /**
     * Create a module for each component
     *
     * @param {function} callback
     */
    createComponentPages (done) {
      console.time('createComponentPages');
      let sitemap = require('app_modules/site/navigation/sitemap').default;
      let routes = sitemap.getFlattenedRoutes()
        .filter(route => route.component);
      async.waterfall([
        (callback) =>
          async.map(routes, this.createComponentPage, callback),
        writeFiles(this.getSitePathTmp())
      ], err => {
        console.timeEnd('createComponentPages');
        done(err);
      });
    },

    /**
     * Create a module for a component
     *
     * @param {object} route
     * @param {function} done
     */
    createComponentPage (route, done) {
      //console.time(`createComponentPage: ${route.path}`);
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
      //console.timeEnd(`createComponentPage: ${route.path}`);
      done(null, file);
    },

    /**
     * Transform page routes into an HTML string
     *
     * @param {array} routes
     * @param {object} route
     * @param {function} done
     */
    renderPage (routes, route, done) {
      //console.time(`renderPage: ${route.path}`);
      try {
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
        let Page = require('app_modules/site/components/page').default;
        let pageProps = getPrefixedProps(pageBody.props, 'page');
        let page = React.createElement(Page, pageProps);
        // Create a cheerio instance from the <Page /> markup string
        let $ = cheerio.load(ReactDOMServer.renderToStaticMarkup(page));
        // Router
        let location = createLocation(route.path);
        RouterMatch({ routes, location }, (error, redirectLocation, renderProps) => {
          if (error) throw error;
          let html = ReactDOMServer.renderToString(
            React.createElement(RoutingContext, renderProps));
          $('#app').append(html);
          $('body').append(`<script>LIGHTNING_DESIGN_SYSTEM.init('${route.modulePath}')</script>`);
          $('html').before('<!DOCTYPE html>');
          newFile.contents = new Buffer($.html());
          done(null, newFile);
        });
      } catch (e) {
        done(e);
      }
      //console.timeEnd(`renderPage: ${route.path}`);
    },

    /**
     * Create the routes needed to render the pages statically
     * and then stream the metadata through the renderPage() function
     *
     * @param {function} done
     */
    renderPages (done) {
      console.time('renderPages');
      let sitemap = require('app_modules/site/navigation/sitemap').default;
      let sitemapRoutes = sitemap.getFlattenedRoutes();
      async.waterfall([
        (callback) => async.map(
          sitemapRoutes,
          (route, callback) => {
            try {
              let pagePath = this.getSitePathTmp(route.getIndexPath(route.path));
              let page = require(pagePath).default;
              let Page = props => page;
              callback(null, {
                name: route.uid,
                path: route.path,
                component: Page
              });
            } catch (err) {
              callback(err);
            }
          },
          callback
        ),
        (routes, callback) => async.map(
          sitemapRoutes,
          async.apply(this.renderPage, routes),
          callback
        ),
        writeFiles(__PATHS__.www, {
          pipes: [grename(path => path.extname = '.html')]
        })
      ], err => {
        console.timeEnd('renderPages');
        done(err);
      });
    },

    /**
     * Create the pages
     *
     * @param {function} done
     */
    compile (done) {
      console.time('compile');
      async.series([
        done => {
          async.parallel([
            this.createPages,
            this.createComponentPages
          ], done);
        },
        this.renderPages
      ], err => {
        done(err);
        console.timeEnd('compile');
      });
    }

  };

  return _.bindAll(compiler, _.functions(compiler));

}
