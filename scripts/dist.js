/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import './helpers/setup';

import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import async from 'async';
import autoprefixer from 'autoprefixer';
import globals from '../app_modules/global';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import gulpinsert from 'gulp-insert';
import gulpzip from 'gulp-zip';
import gulprename from 'gulp-rename';
import { C_STYLE as license } from 'scripts/tasks/update-boilerplate';
import minimist from 'minimist';
import postcss from 'postcss';
import rimraf from 'rimraf';
import sass from 'node-sass';
import through from 'through2';

const argv = minimist(process.argv.slice(2));
const isNpm = argv.npm === true;

const MODULE_NAME = globals.moduleName;
const DESIGN_TOKENS_MODULE_NAME = '@salesforce-ux/design-tokens';
const DESIGN_TOKENS_IMPORT_NAME = '../node_modules/' + DESIGN_TOKENS_MODULE_NAME;
const PRESERVE_COMMENTS_CONTAINING = /(normalize|http|https|license|flag)/ig;

const now = new Date();

///////////////////////////////////////////////////////////////
// Helpers
///////////////////////////////////////////////////////////////

const distPath = path.resolve.bind(path, __PATHS__.dist);

function isNotVendorFile(file) {
  return /vendor/.test(file.path) === false;
}

function commentBanner(messages) {
  messages = messages.map(function(message) {
    return ' * ' + message;
  }).join('\n');
  return [
    '/***',
    messages,
    ' */\n'
  ].join('\n');
}

function copy(src, dest, options, done) {
  gulp.src(src, options)
    .pipe(gulp.dest(dest))
    .on('error', done)
    .on('finish', done);
}

function removeCSSComments (css) {
  return postcss([function (root, result) {
    root.walkComments(function (comment) {
      if (!comment.text.match(PRESERVE_COMMENTS_CONTAINING)) {
        comment.remove();
      }
    });
  }]).process(css).css;
}

function convertRemToPx (css) {
  return postcss([function (root, result) {
    root.replaceValues(/\d*\.?\d+rem/g, function (string) {
      return (16 * parseFloat(string, 10)) + 'px';
    });
  }]).process(css).css;
}

/**
 * Compile the Sass and output to /css
 *
 * @param {object} options
 * @param {function} done
 */
function compileSass(opts, done) {
  const dest = `assets/styles/${MODULE_NAME}${opts.target}.css`;
  let css;
  try {
    css = sass.renderSync({
      file: distPath('scss/' + opts.source),
      outputStyle: 'nested',
      sourceComments: false,
      includePaths: [
        __PATHS__.node_modules
      ]
    }).css.toString();
    // Comments
    css = removeCSSComments(css);
    // Rem => Px
    if (opts.isVF) {
      css = convertRemToPx(css);
    }
    // Autoprefixer
    css = postcss([autoprefixer]).process(css).css;
  } catch (e) {
    return done(e);
  }
  const stream = through.obj();
  const file = new gutil.File({
    path: dest,
    contents: new Buffer(css)
  });
  stream.write(file);
  stream.end();
  stream
  .pipe(gulp.dest(distPath()))
  .on('error', done)
  .on('finish', done);
}

///////////////////////////////////////////////////////////////
// Tasks
///////////////////////////////////////////////////////////////

async.series([

  /**
   * Clean the dist folder
   */
  (done) => rimraf(__PATHS__.dist, done),

  /**
   * Copy necessary root files to be included in the final module
   */
  (done) => {
    const src = [
      'README-dist.txt',
      '.npmignore',
      'package.json'
    ].map(function(file) {
      return path.resolve(__PATHS__.root, file);
    });
    copy(src, __PATHS__.dist, {}, done);
  },

  /**
   * Cleanup the package.json
   */
  (done) => {
    let packageJSON = JSON.parse(fs.readFileSync(distPath('package.json')).toString());
    packageJSON.name = '@salesforce-ux/design-system';
    delete packageJSON.scripts;
    delete packageJSON.gitDependencies;
    delete packageJSON.devDependencies;
    fs.writeFile(
      distPath('package.json'),
      JSON.stringify(packageJSON, null, 2),
      done
    );
  },

  ////////////////////////////////////
  // Sass
  ////////////////////////////////////

  /**
   * Move all the scss files to dist/scss
   */
  (done) => {
    gulp.src([
      path.resolve(__PATHS__.ui, '**/*.scss')
    ], { base: __PATHS__.ui })
      // Add the version
      .pipe(gulpif(isNotVendorFile, gulpinsert.prepend(`/* ${globals.displayName} ${process.env.SLDS_VERSION} */\n`)))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'scss')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Copy the Sass license
   */
  (done) => {
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/licenses/License-for-Sass.txt'))
      .pipe(gulp.dest(distPath('scss')))
      .on('error', done)
      .on('finish', done);
  },

  ////////////////////////////////////
  // Icons
  ////////////////////////////////////

  /**
   * Copy all the icons to assets/icons
   */
  (done) => {
    gulp.src('node_modules/@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/**')
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/icons')))
      .on('error', done)
      .on('finish', done);
  },

  ////////////////////////////////////
  // Fonts
  ////////////////////////////////////

  /**
   * Copy all the fonts to assets/fonts if not npm
   */
  (done) => {
    gulp.src('site/assets/fonts/**/*')
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/fonts')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Copy font license
   */
  (done) => {
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/licenses/License-for-font.txt'))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/fonts')))
      .on('error', done)
      .on('finish', done);
  },

  ////////////////////////////////////
  // Images
  ////////////////////////////////////

  /**
   * Copy select images directories
   */
  (done) => {
    gulp.src(['site/assets/images/spinners/*','site/assets/images/avatar*'], {base: 'site/assets/images/'})
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/images')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Copy images license
   */
  (done) => {
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/licenses/License-for-images.txt'))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/images')))
      .on('error', done)
      .on('finish', done);
  },

  ////////////////////////////////////
  // Swatches
  ////////////////////////////////////

  /**
   * Copy the swatches
   */
  (done) => {
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/downloads/swatches/**'))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'swatches')))
      .on('error', done)
      .on('finish', done);
  },

  ////////////////////////////////////
  // Design Tokens
  ////////////////////////////////////

  /**
   * Prefix the "design-tokens" @imports with the
   * relative node_modules path
   */
  (done) => {
    gulp.src(distPath('scss/design-tokens.scss'))
      .pipe(through.obj(function(file, enc, next) {
        const newFile = file.clone();
        // Add the relative node_modules paths to the @import statments
        const template = newFile.contents.toString()
          .replace(new RegExp(DESIGN_TOKENS_MODULE_NAME, 'g'), function() {
            return DESIGN_TOKENS_IMPORT_NAME;
          });
        newFile.contents = new Buffer(template);
        next(null, newFile);
      }))
      .on('error', done)
      .pipe(gulp.dest(distPath('scss')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * If we're not building for npm, inline the design-tokens
   */
  (done) => {
    if (isNpm) return done();
    const pattern = /\"(.*?)\"(?=[,;])/g;
    gulp.src(distPath('scss/design-tokens.scss'))
      .pipe(through.obj(function(file, enc, next) {
        const newFile = file.clone();
        let sassImports = [];
        let contents = newFile.contents.toString();
        let match;
        // Collect the @import paths
        while ((match = pattern.exec(contents)) !== null) {
          sassImports.push(match[1]);
        }
        // Convert the array of paths to an array of file contents
        sassImports = sassImports.map(function(i) {
          return path.resolve(__dirname, i);
        }).filter(function(i) {
          return fs.existsSync(i);
        }).map(function(i) {
          return fs.readFileSync(i).toString();
        });
        // Repalce @import "..", ".."; with the inlined tokens
        contents = contents.replace(/\@import[\s\S]*?;/, function() {
          return sassImports.join('\n');
        });
        newFile.contents = new Buffer(contents);
        next(null, newFile);
      }))
      .on('error', done)
      .pipe(gulp.dest(distPath('scss')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Build design system and vf css from the scss files. The big one!
   */
  (done) => {
    async.map([
      { source: 'index.scss', target: '' },
      { source: 'index-scoped.scss', target: '-scoped' },
      { source: 'index-ltng.scss', target: '-ltng' },
      { source: 'index-vf.scss', target: '-vf', isVF: true }
    ], compileSass, done);
  },

  /**
   * Minify / License / Version
   */
  (done) => {
    gulp.src(distPath('assets/styles/**/*.css'), { base: distPath() })
      .pipe(gulpinsert.prepend(license))
      .pipe(gulpinsert.prepend(`/* ${globals.displayName} ${process.env.SLDS_VERSION} */\n`))
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .pipe(through.obj(function(file, enc, next) {
        const newFile = file.clone();
        sass.render({
          data: newFile.contents.toString(),
          outputStyle: 'compressed'
        }, function (err, result) {
          if (err) return next(err);
          newFile.contents = result.css;
          next(null, newFile);
        });
      }))
      .on('error', done)
      .pipe(gulprename({suffix: '.min'}))
      .on('error', done)
      .pipe(gulpinsert.prepend(license))
      .pipe(gulpinsert.prepend(`/* ${globals.displayName} ${process.env.SLDS_VERSION} */\n`))
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Add build date to README.txt
   */
  (done) => {
    gulp.src(distPath('README-dist.txt'))
      .pipe(gulprename('README.md'))
      .on('error', done)
      .pipe(gulpinsert.prepend(`# ${globals.displayName} \n# Version: ${process.env.SLDS_VERSION} \n`))
      .on('error', done)
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Remove old README-dist
   */
  (done) => {
    rimraf(distPath('README-dist.txt'), done);
  },

  /**
   * Remove .dist node_modules directory
   */
  (done) => {
    rimraf(distPath('node_modules'), done);
  },

  /**
   * Remove npm related files
   */
  (done) => {
    if (isNpm) return done();
    const src = [
      '.npmignore',
      'package.json'
    ].map(file => distPath(file));
    async.each(src, rimraf, done);
  },

  /**
   * Zip everything up
   */
  (done) => {
    if (isNpm) return done();
    return gulp.src(distPath('**/*'))
      .pipe(gulpzip(globals.zipName(process.env.SLDS_VERSION)))
      .on('error', done)
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .on('finish', done);
  }

], err => {
  if (err) throw err;
});
