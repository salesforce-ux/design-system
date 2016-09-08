/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import assert from 'assert';
import fs from 'fs';
import gulp from 'gulp';
import gulpIgnore from 'gulp-ignore';
import gulpRename from 'gulp-rename';
import gutil from 'gulp-util';
import invariant from 'invariant';
import path from 'path';
import beautify from 'js-beautify';
import React from 'react';
import ReactDOMServer, { renderToStaticMarkup } from 'react-dom/server';
import through from 'through2';

import ForceBase from '@salesforce-ux/design-tokens/dist/force-base.common';

import decorateComponent from 'app_modules/site/util/component/decorate';
import { generateUI } from './generate-ui';

/**
 * Return true if a file path contains a directory prefixed with an underscore
 *
 * @param {object} file
 * @returns {boolean}
 */
export const excludeUnderscore = file =>
  file.relative
    .split(path.sep)
    .filter(part => /^_/.test(part))
    .reduce(() => true, false);

/**
 * Return a props object with only props prefixed and then strip the prefix
 *
 * @params {object} props
 * @params {string} prefix
 * @returns {object}
 */
export const getPrefixedProps = (props, prefix) => {
  assert.ok(_.isObject(props), 'props must be an object');
  assert.ok(_.isString(prefix), 'prefix must be a string');
  const pattern = new RegExp(`^${_.escapeRegExp(prefix)}`);
  const prefixedProps = _.pick(props, _.keys(props).filter(key => pattern.test(key)));
  return _.mapKeys(prefixedProps, (value, key) => {
    return _.camelCase(key.replace(pattern, ''));
  });
};

/**
 * Try to requre a module
 *
 * @param {object} obj
 */
export const tryRequire = p => {
  const resolvedPath = path.resolve(__PATHS__.root, p);
  try { fs.accessSync(resolvedPath); } catch (e) { return null; }
  delete require.cache[resolvedPath];
  return require(resolvedPath);
};

/**
 * Return a string of formatted HTML
 *
 * @param {string} html
 * @returns {string}
 */
const prettyHTML = _.memoize(html => beautify.html(html, {
  'indent_size': 2,
  'indent_char': ' ',
  'unformatted': ['a'],
  'wrap_line_length ': 78,
  'indent_inner_html': true
}));

/**
 * Render a <PageBody /> inside a <Page /> and render as HTML
 *
 * @param {ReactElement} pageElement
 * @param {object} props
 * @returns {string}
 */
export const renderPage = (element, props) => {
  const Page = require('app_modules/site/components/page').default;
  // Clone the pageBody with additional props
  const pageBody = React.cloneElement(element, _.assign({}, props));
  // Create page element
  const page = React.createElement(Page,
    // Get any "page" specific props from the pageBody
    _.assign(
      getPrefixedProps(pageBody.props, 'page'),
      { contentHTML: renderToStaticMarkup(pageBody) }
    )
  );
  // Construct the HTML
  return `<!DOCTYPE html>${renderToStaticMarkup(page)}`;
};

/**
 * Return a formatted string of HTML
 */
export const renderExample = element => {
  if (!element) return null;
  // TODO: Figure out how to memoize this
  const html = renderToStaticMarkup(element);
  return prettyHTML(html);
};

/**
 * Wrap example markup with additonal boilerplate to be properly
 * displayed in an iframe
 *
 * @param {object} flavor
 * @param {string} html
 * @returns {string}
 */
export const wrapExample = (flavor, html) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${flavor.title}</title>
  <link type="text/css" rel="stylesheet" href="/assets/styles/slds.css" />
  <link type="text/css" rel="stylesheet" href="/assets/styles/demo.css" />
  <style>
    body { padding: ${ForceBase.spacingMedium}; }
  </style>
  <meta name="robots" content="noindex" />
</head>
<body>
${html}
<script>
  (function() {
    function iframe () { try { return window.self !== window.top; } catch (e) { return true; } }
    if (!iframe()) return;
    // Add a queue that will be drained by the parent
    parent.window.__eventQueue = parent.window.__eventQueue || [];
    // Update the markup
    if (!/initial/.test(window.location.search)) {
      parent.__eventQueue.push({
        name: 'component:iframe:updatePreviewMarkup',
        data: {
          flavor: '${flavor.uid}',
          html: ${JSON.stringify(html)}
        }
      });
    }
    // Adjust the height of the iframe
    function updatePreviewHeight () {
      var frameHeight = document.body.getBoundingClientRect().height;
      parent.__eventQueue.push({
        name: 'component:iframe:updatePreviewHeight',
        data: {
          flavor: '${flavor.uid}',
          height: frameHeight
        }
      });
    }
    updatePreviewHeight();
    window.addEventListener('resize', updatePreviewHeight);
    // Fix SVG
    parent.__eventQueue.push({
      name: 'component:iframe:updatePreviewSVG',
      data: document
    });
  })();
</script>
</body>
</html>`.trim();

/**
 * Return the example element for the current flavor
 *
 * @param {object} options
 * @returns {ReactElement|null}
 */
export const getExampleElement = (example, options) => {
  options = _.defaults({}, options, {
    // The keys (in order) that will be checked for a ReactElement
    keys: ['preview', 'default'],
    // If true, the element will be passed to renderElementState
    renderState: true,
    // The state to be rendered
    state: null
  });
  // Get the first valid ReactElement
  let defaultElement = _(options.keys)
    .filter(key => _.has(example, key))
    .map(key => example[key])
    .filter(React.isValidElement)
    .first();
  // Exit early if no state is needed
  if (options.renderState === false) return defaultElement;
  // If no element was found, check to see if states exist
  if (!defaultElement && _.isArray(example.states) && example.states.length) {
    if (React.isValidElement(example.states[0].element)) {
      defaultElement = example.states[0].element;
    }
  }
  if (!defaultElement) return null;
  if (!options.state) return defaultElement;
  if (React.isValidElement(options.state.element)) {
    return options.state.element;
  }
  return defaultElement;
};

/**
 * Return a transform stream that converts JSX to HTML
 *
 * @returns {Stream}
 */
export const gulpRenderPage = () =>
  through.obj((file, enc, next) => {
    try {
      const pageBody = React.cloneElement(require(file.path).default, {});
      const html = renderPage(pageBody, {
        path: path.dirname(file.path).replace(__PATHS__.site, '')
      });
      // Create the new file
      let newFile = file.clone();
      newFile.base = __PATHS__.site;
      newFile.contents = new Buffer(html);
      next(null, newFile);
    } catch (err) {
      next(err);
    }
  });

/**
 * Return a transform stream that converts a component object to HTML
 *
 * @returns {Stream}
 */
export const gulpRenderComponentPage = () =>
  through.obj(function (component, enc, next) {
    try {
      // Require locally for live reloading
      let [ PageBody, Component, ComponentFlavor ] = [
        'page/body', 'page/component', 'page/component/flavor'
      ].map(p => require(`app_modules/site/components/${p}`).default);
      // Get examples / markup for each flavor
      component.flavors.forEach(flavor => {
        let example = tryRequire(`ui/${flavor.path}/index.react.example.jsx`);
        if (example) {
          const exampleElement = getExampleElement(example);
          const exampleCodeElement = getExampleElement(example, {
            keys: ['code', 'default'],
            renderState: false
          });
          flavor.example = example;
          flavor.exampleMarkup = renderExample(exampleCodeElement
            ? exampleCodeElement : exampleElement);
        }
      });
      // Render example markup for each flavor and push a corresponding HTML
      // file into the stream
      component.flavors
        // Only get flavors with an example
        .filter(flavor => flavor.example)
        .forEach(flavor => {
          // First, check if the example has states
          if (flavor.example.states) {
            // Push a new file for each state
            flavor.example.states.forEach((state, index) => {
              const element = getExampleElement(flavor.example, { state });
              ['id', 'label'].forEach(key => {
                invariant(
                  _.isString(state[key]),
                  `state ${index} of "${flavor.uid}" is missing property "${key}"`
                );
              });
              this.push(new gutil.File({
                path: path.resolve(__PATHS__.site, flavor.path, `_${state.id}.html`),
                contents: new Buffer(
                  wrapExample(flavor, renderExample(element))
                ),
                base: __PATHS__.site
              }));
            });
          } else {
            // No states were found, just get the single example
            const element = getExampleElement(flavor.example);
            if (element) {
              // Push a new file for the single example
              this.push(new gutil.File({
                path: path.resolve(__PATHS__.site, flavor.path, '_default.html'),
                contents: new Buffer(
                  wrapExample(flavor, renderExample(element))
                ),
                base: __PATHS__.site
              }));
            }
          }
        });
      // HACK: Move "utilities" under "components"
      const componentPath = /^utilities/.test(component.path)
        ? `components/${component.path}`
        : component.path;
      // Create the <PageBody> for the component
      const pageBody = (
        <PageBody contentClassName={false} path={`/${componentPath}`}>
          <Component
            component={decorateComponent(component)}
            docs={tryRequire(`ui/${component.path}/index.docs.jsx`)} />
        </PageBody>
      );
      // Push a new HTML page
      next(null, new gutil.File({
        path: path.resolve(__PATHS__.site, componentPath, 'index.html'),
        contents: new Buffer(renderPage(pageBody)),
        base: __PATHS__.site
      }));
    } catch (err) {
      next(err);
    }
  });

/**
 * Return a transform stream that converts component objects to HTML and
 * writes the result to disk
 *
 * @param {object[]} components
 * @returns {Stream}
 */
export const generateComponentPages = (components, callback = _.noop) => {
  const stream = through.obj();
  components.forEach(c => stream.write(c));
  stream.end();
  return stream
    .pipe(gulpRenderComponentPage())
    .on('error', callback)
    .pipe(gulp.dest(__PATHS__.www))
    .on('error', callback)
    .on('finish', callback);
};

gulp.task('pages:components', (done) => {
  let { components } = _.find(generateUI(), { id: 'components' });
  generateComponentPages(components, done);
});

gulp.task('pages:components:utilities', (done) => {
  let { components } = _.find(generateUI(), { id: 'utilities' });
  generateComponentPages(components, done);
});

/**
 * Return a transform stream that converts JSX to HTML and
 * writes the result to disk
 *
 * @param {string} src - a glob of .jsx files that export <PageBody/> elements
 * @returns {Stream}
 */
export const generatePages = (src, callback = _.noop) =>
  gulp
    .src(src)
    .pipe(gulpIgnore.exclude(excludeUnderscore))
    .pipe(gulpRenderPage())
    .on('error', callback)
    .pipe(gulpRename({ extname: '.html' }))
    .on('error', callback)
    .pipe(gulp.dest(__PATHS__.www))
    .on('error', callback)
    .on('finish', callback);

gulp.task('pages', ['pages:components', 'pages:components:utilities'], (done) => {
  generatePages('./site/**/index.jsx', done);
});
