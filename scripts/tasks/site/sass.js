/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs-extra';

import _ from 'lodash';
import async from 'async';
import autoprefixer from 'autoprefixer';
import glob from 'glob';
import gulp from 'gulp';
import gutil from 'gulp-util';
import minimist from 'minimist';
import postcss from 'postcss';
import sass from 'node-sass';
import through from 'through2';

const argv = minimist(process.argv.slice(2));
const isDev = argv.dev === true;
const isProd = argv.prod === true;

const getSitePath = path.resolve.bind(path, __PATHS__.site);

function render (file, callback) {
  sass.render({
    file: file,
    outputStyle: isProd ? 'compressed' : 'nested',
    sourceComments: isProd ? false : true,
    includePaths: [
      __PATHS__.root,
      __PATHS__.ui,
      __PATHS__.node_modules
    ]
  }, (err, result) => {
    if (err) {
      console.log(`Error processing file: ${err.message} (${err.file}: ${err.line}:${err.column})`);
      return callback(err);
    }
    callback(null, result);
  });
}

function autoprefix (sassResult, callback) {
  postcss([autoprefixer()]).process(sassResult.css.toString()).then(result => {
    sassResult.cssPrefixed = new Buffer(result.css);
    callback(null, sassResult);
  }, callback);
}

export function compile(callback) {
  console.log('Compiling Sass');
  async.waterfall([
    // Files
    (callback) => glob(getSitePath('**/*.scss'), callback),
    // Filter files/dirs prefixed with an _
    (files, callback) => {
      callback(null, files.filter(file => {
        let pattern = new RegExp(_.escapeRegExp(path.sep) + '_');
        return !pattern.test(file.replace(getSitePath(), ''));
      }));
    },
    // Sass
    (files, callback) => async.map(files, render, callback),
    // Autoprefixer
    (results, callback) => async.map(results, autoprefix, callback),
    // Write to disk
    (results, callback) => {
      async.each(results, (result, callback) => {
        let p = result.stats.entry;
        p = p.replace(getSitePath(), '');
        p = path.join(__PATHS__.www, p);
        p = path.join(path.dirname(p), path.basename(p, path.extname(p)) + '.css');
        fs.outputFile(p, result.cssPrefixed.toString(), callback);
      }, callback);
    }
  ], callback);
}
