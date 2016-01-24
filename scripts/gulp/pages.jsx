/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import '../helpers/setup';

import assert from 'assert';
import path from 'path';

import _ from 'lodash';
import gulp from 'gulp';
import gulpIgnore from 'gulp-ignore';
import gulpRename from 'gulp-rename';
import gutil from 'gulp-util';
import through from 'through2';

import cheerio from 'cheerio';
import React from 'react';
import ReactDOMServer, { renderToStaticMarkup } from 'react-dom/server';
import { html as prettyHTML } from 'js-beautify';
import Page from 'app_modules/site/components/page';

/**
 *
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
 *
 */
const renderHTML = through.obj((file, enc, next) => {
  // Get the pageBody element
  let pageBody = React.cloneElement(require(file.path).default, {});
  // Get any "page" specific props from the pageBody
  let pageProps = getPrefixedProps(pageBody.props, 'page');
  // Create page element
  let page = React.createElement(Page, pageProps);
  // Construct the HTML
  let $ = cheerio.load(renderToStaticMarkup(page));
  $('#app').append(renderToStaticMarkup(pageBody));
  $('html').before('<!DOCTYPE html>');
  let html = $.html();
  // TODO: Remove
  html = prettyHTML(html, {
    'indent_size': 2,
    'indent_char': ' ',
    'unformatted': ['a']
  });
  // Create the new file
  let newFile = file.clone();
  newFile.contents = new Buffer(html);
  next(null, newFile);
});

/**
 *
 */
export const generatePages = src =>
  gulp.src(src)
    .pipe(gulpIgnore.exclude(excludeUnderscore))
    .pipe(renderHTML)
    .pipe(gulpRename({ extname: '.html' }))
    .pipe(gulp.dest(__PATHS__.www));

/**
 *
 */
gulp.task('pages', () => generatePages('./site/**/index.jsx'));
