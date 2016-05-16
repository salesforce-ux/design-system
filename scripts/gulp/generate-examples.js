/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import through from 'through2';
import beautify from  'js-beautify';
import { renderToStaticMarkup } from 'react-dom/server';

import { resolve } from 'path';
import { assign, flatMap } from 'lodash';
import { generateUI } from './generate-ui';

const prettyHTML = html => beautify.html(html, {
  'indent_size': 2,
  'indent_char': ' ',
  'unformatted': ['a'],
  'wrap_line_length ': 78,
  'indent_inner_html': true
});

const toStates = (ex, k) =>
  [{ id: k, element: ex[k] }];

const getStates = file =>
  file.preview ? toStates(file, 'preview')
    : file.default ? toStates(file, 'default')
      : file.states;

const requireExample = flavor =>
  require(resolve(__PATHS__.ui, flavor.examplePath));

export const addExamples = comps =>
  comps.map(c => assign(c, {
    flavors: c.flavors
        .filter(f => f.examplePath)
        .map(f => assign(f, { examples: getStates(requireExample(f)) }))
  })
);

export const getComponents = schema =>
  flatMap(generateUI(schema), 'components');

const getName = (component, flavor, example) =>
  `${component.id}_${flavor.id}_${example.id}`;

const flattenExamples = comps =>
  flatMap(comps, comp =>
    flatMap(comp.flavors, flavor =>
      flatMap(flavor.examples, ex =>
        assign(ex, { uid: getName(comp, flavor, ex) }))));

const toHtml = el =>
  prettyHTML(renderToStaticMarkup(el));

gulp.task('generate:examples', ['generate:whitelist'], () => {
  const stream = through.obj();
  const examples = flattenExamples(addExamples(getComponents()));
  examples.forEach(ex =>
    stream.write(new gutil.File({
      path: `${ex.uid}.html`,
      contents: new Buffer(toHtml(ex.element))
    })));
  stream.end();
  return stream
    .pipe(gulp.dest(resolve(__PATHS__.generated, 'examples')));
});
