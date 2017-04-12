/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import gulp from 'gulp';
import gutil from 'gulp-util';
import Immutable from 'immutable';
import insert from 'gulp-insert';
import path from 'path';
import through from 'through2';
import { ui, reduceTree } from '../ui';

gulp.task('generate:wrappedexamples', ['generate:examples'], () =>
  gulp
    .src(`${__PATHS__.generated}/examples/*.html`)
    .pipe(insert.wrap('<!DOCTYPE html><html lang="en"><head><title>Example</title><link type="text/css" rel="stylesheet" href="../.www/assets/styles/slds.css" /></head><body>', '</body></html>'))
    .pipe(gulp.dest(__PATHS__.html)));

gulp.task('generate:examples', () => {
  const stream = through.obj();
  ui().fork(() => {}, ui => {
    ui.get('components').forEach(component => {
      reduceTree((a, b) => a.push(b), Immutable.List(), component)
        .filter(n => n.hasIn(['annotations', 'variant']))
        .forEach(variant => {
          variant.get('markup')
            .filter(section => section.get('title') !== 'examples')
            .forEach(section => {
              section.get('items').forEach(item => {
                const name = Immutable.List.of(
                  component.get('id'),
                  variant.get('id'),
                  item.get('id')
                ).join('_');
                const markupContext = variant.get('markupContext');
                const markup = Immutable.List.of(
                  markupContext.get(0, ''),
                  item.get('markup'),
                  markupContext.get(1, '')
                ).join('');
                stream.write(new gutil.File({
                  path: `${name}.html`,
                  contents: new Buffer(markup)
                }));
              });
            });
        });
    });
    stream.end();
  });
  return stream
    .pipe(gulp.dest(`${__PATHS__.generated}/examples`));
});
