// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import './helpers/setup';

import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import async from 'async';
import autoprefixer from 'autoprefixer';
import globals from '../app_modules/global';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpfile from 'gulp-file';
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
import Task from 'data.task';
import {ui} from './ui';

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
      './README-dist.md',
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
    delete packageJSON.devDependencies;
    delete packageJSON.optionalDependencies;
    delete packageJSON.engines;
    delete packageJSON.important;
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
      'assets/images/avatar*',
      // Used in the Global Header
      'assets/images/logo-noname.svg'
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
   * Move design tokens
   */
  (done) => {
    // Bundle everything in the npm package
    // but only sources and Sass files in the zip
    // because it would make the zip too large to be imported
    // as a Static Resource in a Salesforce Org (limited to 5MB)
    const src = isNpm ? '**/*.*' : ['**/*.yml', '**/*.scss'];
    gulp.src(src, {
      base: `${__PATHS__.designTokens}`,
      cwd: `${__PATHS__.designTokens}`
    })
    .pipe(gulp.dest(distPath('design-tokens')))
    .on('error', done)
    .on('finish', done);
  },

  /**
   * Move component design tokens
   */
  (done) => {
    gulp.src('components/**/tokens/**/*.yml', {
      base: path.resolve(__PATHS__.ui),
      cwd: path.resolve(__PATHS__.ui)
    })
    .pipe(gulp.dest(distPath('ui')))
    .on('error', done)
    .on('finish', done);
  },

  /**
   * Build design system and vf css from the scss files. The big one!
   */
  (done) => {
    gulp.src(distPath('scss/index.scss'))
      .pipe(sass({
        precision: 10,
        includePaths: [
          __PATHS__.node_modules
        ]
      }))
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([ autoprefixer({ remove: false }) ]))
      .pipe(gulprename(function(path) {
        path.basename = MODULE_NAME + path.basename.substring('index'.length);
        path.extname = '.css';
        return path;
      }))
      .pipe(gulp.dest(distPath('assets/styles/')))
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
        advanced: false,
        roundingPrecision: '-1'
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
    gulp.src(distPath('README-dist.md'))
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
    rimraf(distPath('README-dist.md'), done);
  },

  /**
   * Add ui.json
   */
  (done) =>
    ui()
    .map(ui => JSON.stringify(ui, null, 2))
    .chain(json =>
      new Task((rej, res) =>
        gulpfile('ui.json', json, { src: true })
        .pipe(gulp.dest(distPath()))
        .on('finish', res)
        .on('error', rej)))
    .fork(done, () => done(null, null)),

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
