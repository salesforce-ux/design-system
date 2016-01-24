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
import gulp from 'gulp';
import gutil from 'gulp-util';
import postcss from 'postcss';
import sass from 'gulp-sass';
import through from 'through2';

import globals from 'app_modules/global';
import { generateUI } from './generate-ui';

/**
 * Get all the classes defined at any point in a selector
 *
 * @param {string} css
 * @param {object} options
 * @returns {string[]}
 */
export const getClasses = (css, options) => {
  assert(_.isString(css), 'argument "css" must be a string')
  const selectors = [];
  options = _.defaults({}, options);
  options.removePrefix = _.isString(options.removePrefix)
    ? new RegExp('^(\\.|#)' + _.escapeRegExp(options.removePrefix)) : false;
  postcss([
    css => css.walkRules(r =>
      selectors.push(r.selector))
  ]).process(css).css;
  return _(selectors)
    .compact()
    .map(s => s.match(/\.[a-zA-Z_0-9\-\_]+/g))
    .flatten().compact()
    .map(s => options.removePrefix ? s.replace(options.removePrefix, '$1') : s)
    .uniq().sortBy().value();
}

/**
 * Return a map of classNames related to components from a UI object
 *
 * @param {array} components
 * @param {string[]}
 */
export const getComponentClasses = components => {
  const classes = {};
  const hasClassBase = c => _.isString(c.classBase);
  components.filter(hasClassBase).forEach(c => {
    classes[`.${c.classBase}`] = true;
    _.result(c, 'flavors', []).forEach(flavor => {
      const classBase = _.result(flavor, 'classBase', c.classBase);
      classes[`.${classBase}--${flavor.id}`] = true;
    });
  });
  return classes;
};

gulp.task('generate:whitelist-utilities', () =>
  gulp
    .src('ui/utilities/index-with-dependencies.scss')
    // Compile a CSS file of just utilities
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        __PATHS__.root,
        __PATHS__.ui,
        __PATHS__.node_modules
      ]
    }))
    .pipe(through.obj(function (file, enc, next) {
      try {
        const css = file.contents.toString();
        const components = _.find(generateUI(), { id: 'components' });
        // Get a map of classNames related to components
        const componentClasses = getComponentClasses(
          _.result(components, 'components', []));
        // Get a list of classNames that aren't in componentClasses
        const classes = getClasses(css, {
          removePrefix: globals.cssPrefix
        }).filter(c =>  !componentClasses[c]);
        const whitelist = JSON.stringify(classes);
        next(null, new gutil.File({
          path: 'whitelist-utilities.js',
          contents: new Buffer(`export default ${whitelist}`)
        }));
      } catch (err) {
        next(err);
      }
    }))
    .pipe(gulp.dest(__PATHS__.generated))
);

gulp.task('generate:whitelist', () =>
  gulp
    .src('.www/assets/styles/slds.css')
    .pipe(through.obj(function (file, enc, next) {
      try {
        const css = file.contents.toString();
        const classes = getClasses(css, {
          removePrefix: globals.cssPrefix
        });
        const whitelist = JSON.stringify(classes);
        next(null, new gutil.File({
          path: 'whitelist.js',
          contents: new Buffer(`export default ${whitelist}`)
        }));
      } catch (err) {
        next(err);
      }
    }))
    .pipe(gulp.dest(__PATHS__.generated))
);
