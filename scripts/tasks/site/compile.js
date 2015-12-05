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
import rename from 'gulp-rename';
import gutil from 'gulp-util';
import { createLocation } from 'history';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, Link, match as RouterMatch, RoutingContext } from 'react-router';
import through from 'through2';

import createComponent from 'app_modules/site/util/component/create';
import { getDefaultEnvVars } from 'scripts/helpers/env';

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
export function createPageCompiler () {

  const compiler = {

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
      console.log('Creating Pages');
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
      console.log('Creating Component Pages');
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
        console.log('Rendering page ' + route.path);
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
      console.log('Rendering Pages');
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
     * Create the pages
     *
     * @param {function} callback
     */
    compile(callback) {
      async.series([
        done => {
          async.parallel([
            this.createPages,
            this.createComponentPages
          ], done);
        },
        this.renderPages
      ], callback);
    }

  };

  return _.bindAll(compiler, _.functions(compiler));

}
