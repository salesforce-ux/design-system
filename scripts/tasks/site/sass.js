/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';

import _ from 'lodash';
import autoprefixer from 'autoprefixer-core';
import css from 'css';
import { diff } from 'deep-diff';
import gulp from 'gulp';
import minimist from 'minimist';
import postcss from 'gulp-postcss';
import sass from 'node-sass';
import through from 'through2';

import ignoreUnderscore from 'app_modules/util/ignore-underscore';

const argv = minimist(process.argv.slice(2));
const isDev = argv.dev === true;
const isProd = argv.prod === true;

const getSitePath = path.resolve.bind(path, __PATHS__.site);
const getSitePathTmp = path.resolve.bind(path, __PATHS__.tmp, 'site');

/**
 * Update override stylesheets to only include rules that have updated values
 * (not currently being used)
 *
 * @return {TransformStream}
 */
function optimizeTokenOverrides() {
  const files = {};
  const filesOverride = [];
  function transform(file, enc, next) {
    const name = path.basename(file.path);
    // Collect all iframe files
    if (name.match(/iframe/)) {
      files[name] = file.clone();
      // Collect files that use override tokens
      if (name.match(/iframe\.(medium|large)\.css$/)) {
        filesOverride.push(file.clone());
        return next(null, null);
      }
    }
    next(null, file);
  }
  function flush(next) {
    if (filesOverride.length === 0) return next();
    // Create a base ast to diff against
    const baseTree = css.parse(files['iframe.css'].contents.toString());
    // Diff each override against the base
    filesOverride.forEach(override => {
      // Create an ast for the override
      const overrideTree = css.parse(override.contents.toString());
      // This represents final stylehseet
      const newStylesheet = { stylesheet: { rules: [] } };
      // Diff
      const differences = diff(baseTree, overrideTree);
      if (differences) {
        differences
        // Only use diffs that have a keypath like: ['stylesheet', 'rules', index, ..., 'value']
        .filter(d => _.isNumber(d.path[2]) && _.last(d.path) === 'value')
        .forEach(d => {
          const index = d.path[2];
          // Add the changed rule to the new stylehsheet
          newStylesheet.stylesheet.rules.push(overrideTree.stylesheet.rules[index]);
        });
      }
      // Save the new stylesheet
      override.contents = new Buffer(css.stringify(newStylesheet));
      this.push(override);
    });
    next();
  }
  return through.obj(transform, flush);
}

/**
 * Sass
 */
export function compileSass(e, done) {
  console.log('Compiling Sass');
  function handleError(err) {
    //browserSyncConsole.error(err);
    done(err);
  }
  gulp.src(getSitePath('**/*.scss'), { base: getSitePath() })
  .pipe(ignoreUnderscore(getSitePath()))
  // Sass
  .pipe(through.obj((file, enc, next) => {
    const newFile = file.clone();
    let contents = file.contents.toString();
    try {
      contents = sass.renderSync({
        data: contents,
        file: newFile.path,
        outputStyle: isProd ? 'compressed' : 'nested',
        sourceComments: isProd ? false : true,
        includePaths: [
          __PATHS__.root,
          __PATHS__.ui,
          __PATHS__.node_modules
        ]
      }).css;
    } catch(error) {
      console.log('Error processing file: ' + error.message + ' (' + error.file + ':' + error.line + ':' + error.column + ')');
      return next(error);
    }
    newFile.contents = new Buffer(contents);
    newFile.path = newFile.path.replace(/\.scss$/, '.css');
    next(null, newFile);
  }))
  .on('error', handleError)
  // Autoprefixer
  .pipe(postcss([autoprefixer()]))
  .on('error', handleError)
  // Send the files to the public directory
  .pipe(gulp.dest(__PATHS__.www))
  .on('error', handleError)
  .on('finish', done);
}
