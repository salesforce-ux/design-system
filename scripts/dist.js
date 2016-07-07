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
import minimist from 'minimist';
import postcss from 'gulp-postcss';
import rem2px from 'gulp-rem2px';
import rimraf from 'rimraf';
import sass from 'gulp-sass';
import through from 'through2';
import minifycss from 'gulp-minify-css';

const argv = minimist(process.argv.slice(2));
const isNpm = argv.npm === true;

const MODULE_NAME = globals.moduleName;

///////////////////////////////////////////////////////////////
// Helpers
///////////////////////////////////////////////////////////////

const distPath = path.resolve.bind(path, isNpm ? __PATHS__.npm : __PATHS__.dist);

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

///////////////////////////////////////////////////////////////
// Tasks
///////////////////////////////////////////////////////////////

async.series([

  /**
   * Clean the dist folder
   */
  (done) => rimraf(distPath(), done),

  /**
   * Copy necessary root files to be included in the final module
   */
  (done) => {
    gulp.src([
      './README-dist.txt',
      './package.json'
    ], {
      base: __PATHS__.root
    })
    .pipe(gulp.dest(distPath()))
    .on('error', done)
    .on('finish', done);
  },

  /**
   * Cleanup the package.json
   */
  (done) => {
    let packageJSON = JSON.parse(fs.readFileSync(distPath('package.json')).toString());
    packageJSON.name = '@salesforce-ux/design-system';
    delete packageJSON.scripts;
    delete packageJSON.dependencies;
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
    gulp.src('**/*.scss', {
      base: __PATHS__.ui,
      cwd: __PATHS__.ui
    })
    .pipe(gulp.dest(distPath('scss')))
    .on('error', done)
    .on('finish', done);
  },

  /**
   * Copy the Sass license
   */
  (done) => {
    gulp.src('assets/licenses/License-for-Sass.txt', {
      cwd: __PATHS__.site
    })
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
    gulp.src('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/**', {
      cwd: __PATHS__.node_modules
    })
    .pipe(gulp.dest(distPath('assets/icons')))
    .on('error', done)
    .on('finish', done);
  },

  ////////////////////////////////////
  // Fonts
  ////////////////////////////////////

  /**
   * Copy all the fonts to assets/fonts
   */
  (done) => {
    gulp.src('assets/fonts/**/*', {
      cwd: __PATHS__.site
    })
    .pipe(gulp.dest(distPath('assets/fonts')))
    .on('error', done)
    .on('finish', done);
  },

  /**
   * Copy font license
   */
  (done) => {
    gulp.src('assets/licenses/License-for-font.txt', {
      cwd: __PATHS__.site
    })
    .pipe(gulp.dest(distPath('assets/fonts')))
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
    gulp.src([
      'assets/images/spinners/*',
      'assets/images/avatar*'
    ], {
      base: 'site/assets/images',
      cwd: __PATHS__.site
    })
    .pipe(gulp.dest(distPath('assets/images')))
    .on('error', done)
    .on('finish', done);
  },

  /**
   * Copy images license
   */
  (done) => {
    gulp.src('assets/licenses/License-for-images.txt', {
      cwd: __PATHS__.site
    })
    .pipe(gulp.dest(distPath('assets/images')))
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
    gulp.src('assets/downloads/swatches/**', {
      cwd: __PATHS__.site
    })
    .pipe(gulp.dest(distPath('swatches')))
    .on('error', done)
    .on('finish', done);
  },

  ////////////////////////////////////
  // Design Tokens
  ////////////////////////////////////

  /**
   * Inline the design-tokens
   */
  (done) => {
    const pattern = /\'(.*?)\'(?=[,;])/g;
    gulp.src(distPath('scss/_design-tokens.scss'))
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
      sassImports = sassImports.map(i => {
        return path.resolve(__dirname, '../node_modules', i);
      }).filter(i => {
        return fs.existsSync(i);
      }).map(i => {
        return fs.readFileSync(i).toString();
      });
      // Replace @import "dep/a", "dep/b"; with the inlined tokens
      contents = contents.replace(/\@import[\s\S]*?;/, () => {
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
    gulp.src(distPath('scss/index*.scss'))
      .pipe(sass({
        precision: 10,
        includePaths: [
          __PATHS__.node_modules
        ]
      }))
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(gulprename(function(path) {
        path.basename = MODULE_NAME + path.basename.substring('index'.length);
        path.extname = '.css';
        return path;
      }))
      .pipe(gulp.dest(distPath('assets/styles/')))
      .on('error', done)
      .on('finish', done);
  },
  (done) => {
    gulp.src(distPath('assets/styles/*-vf.css'), { base: distPath() })
      .pipe(rem2px(16))
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .on('finish', done);
  },
  (done) => {
    gulp.src(distPath('assets/styles/*-bs3.css'), { base: distPath() })
      .pipe(rem2px(16))
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .on('finish', done);
  },
  /**
   * Minify CSS
   */
  (done) => {
    gulp.src(distPath('assets/styles/*.css'), { base: distPath() })
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .pipe(minifycss({
        advanced: false
      }))
      .pipe(gulprename(function(path) {
        path.basename += '.min';
        return path;
      }))
      .on('error', done)
      .pipe(gulp.dest(distPath()))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Add version to relevant CSS and Sass files
   */
  (done) => {
    gulp.src([
      '**/*.css',
      'scss/index*'
    ], {
      base: distPath(),
      cwd: distPath()
    })
    .pipe(gulpinsert.prepend(`/*! ${globals.displayName} ${process.env.SLDS_VERSION} */\n`))
    .pipe(gulp.dest(distPath()))
    .on('error', done)
    .on('finish', done);
  },
  (done) => {
    gulp.src([
      'scss/**/*.scss',
      '!scss/index*.scss',
      '!scss/vendor/**/*.*'
    ], {
      base: distPath(),
      cwd: distPath()
    })
    .pipe(gulpinsert.prepend(`// ${globals.displayName} ${process.env.SLDS_VERSION}\n`))
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
   * Remove npm related files
   */
  (done) => {
    if (isNpm) return done();
    const src = [
      'package.json'
    ].map(file => distPath(file));
    async.each(src, rimraf, done);
  },

  /**
   * Zip everything up
   */
  (done) => {
    gulp.src(distPath('**/*'))
    .pipe(gulpzip(globals.zipName(process.env.SLDS_VERSION)))
    .on('error', done)
    .pipe(gulp.dest(distPath()))
    .on('error', done)
    .pipe(gulp.dest(path.resolve(__PATHS__.www, 'assets/downloads')))
    .on('error', done)
    .on('finish', done);
  }

], err => {
  if (err) throw err;
});
