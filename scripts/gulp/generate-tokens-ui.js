/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import fs from 'fs';
import async from 'async';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import theo from 'theo';
import yaml from 'js-yaml';
import through from 'through2';
import insert from 'gulp-insert';

const rem2px = (value, baseFontPercentage = 100, baseFontPixel = 16) =>
  `${value.replace(/rem$/g, '') * baseFontPixel * (baseFontPercentage / 100)}px`;

const addPxValueProp = () =>
  through.obj((file, enc, next) => {
    const set = {
      name: path.basename(file.path, '.yml'),
      contents: JSON.parse(file.contents.toString())
    };
    Object.keys(set.contents.props).forEach(prop => {
      if (/rem$/.test(set.contents.props[prop].value)) {
        set.contents.props[prop]['.pxValue'] = rem2px(set.contents.props[prop].value);
      }
    });
    file.contents = new Buffer(JSON.stringify(set, null, 2));
    next(null, file);
  });

const overrideValuesWith = (set) =>
  through.obj((file, enc, next) => {
    const sets = JSON.parse(file.contents);
    const s1BaseLarge = _.find(sets, { name: set });

    // A bit complicated, but basically takes all the tokens from "set"
    // and overrides similar tokens with those values in other sets
    _.forEach(sets, (set) => {
      _.forEach(['aliases', 'props'], (contentKey) => {
        set.contents[contentKey] = _.mapValues(set.contents[contentKey], (value, key) => {
          if (_.has(s1BaseLarge.contents[contentKey], key)) {
            return s1BaseLarge.contents[contentKey][key];
          }
          return value;
        });
      });
    });

    file.contents = new Buffer(JSON.stringify(sets, null, 2));
    next(null, file);
  });

const deleteSet = (set) =>
  through.obj((file, enc, next) => {
    const sets = JSON.parse(file.contents);
    const setsWithoutSet = _.pull(sets, _.find(sets, { name: set }));
    file.contents = new Buffer(JSON.stringify(setsWithoutSet, null, 2));
    next(null, file);
  });


gulp.task('generate:tokens:ui', (done) =>
  gulp.src([
    path.resolve(__PATHS__.designTokens, 'force-base.yml'),
    path.resolve(__PATHS__.designTokens, 'force-mq-commons.yml'),
    path.resolve(__PATHS__.designTokens, 's1-base.yml'),
    path.resolve(__PATHS__.designTokens, 's1-base-large.yml')
  ])
    .pipe(theo.plugins.transform('web', {
      includeMeta: true,
      includeRawValue: true
    }))
    .on('error', done)
    .pipe(addPxValueProp())
    .pipe(gutil.buffer())
    .pipe(through.obj((files, enc, next) => {
      const json = [];
      files.forEach(file =>
        json.push(JSON.parse(file.contents))
      );
      const file = new gutil.File({
        path: 'ui.tokens.js',
        contents: new Buffer(JSON.stringify(json, null, 2))
      });
      next(null, file);
    }))
    .pipe(overrideValuesWith('s1-base-large'))
    .pipe(deleteSet('s1-base-large'))
    .pipe(insert.prepend('module.exports = '))
    .pipe(gulp.dest(__PATHS__.generated))
);
