// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

require('./generate-tokens-components');

const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const gutil = require('gulp-util');
const minifycss = require('gulp-minify-css');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const StyleStats = require('stylestats');
const runSequence = require('run-sequence');

const paths = require('../helpers/paths');

const sign = x => (x < 0) ? '' : '+';
const toKB = n => (n / 1024).toFixed(2);

gulp.task('stylestats', ['styles'], done => {
  const localFile = '.assets/styles/slds.css';
  const remoteFile = 'https://www.lightningdesignsystem.com/assets/styles/slds.css';

  const localStats = new StyleStats(localFile, '.stylestatsrc');
  const remoteStats = new StyleStats(remoteFile, '.stylestatsrc');
  const remote = {};

  remoteStats.parse((error, result) => {
    if (error) throw error;
    remote.size = result.size;
    remote.gzippedSize = result.gzippedSize;
    remote.rules = result.rules;
    remote.selectors = result.selectors;

    localStats.parse((error, result) => {
      const diff = {};

      diff.size = result.size - remote.size;
      diff.gzippedSize = result.gzippedSize - remote.gzippedSize;
      diff.rules = result.rules - remote.rules;
      diff.selectors = result.selectors - remote.selectors;

      gutil.log(gutil.colors.green(`slds.scss (minified):
            ${toKB(result.size)}KB (${toKB(result.gzippedSize)}KB gzipped)`));

      gutil.log(gutil.colors.gray(`That's ${sign(diff.size)}${toKB(diff.size)}KB (${sign(diff.gzippedSize)}${diff.gzippedSize.toKB()}KB gzipped) than the current public version.`));

      gutil.log(`Additional stats:
            Rules: ${result.rules} (${sign(diff.rules)}${diff.rules})
            Selectors: ${result.selectors} (${sign(diff.selectors)}${diff.selectors})`);
      done(error, result);
    });
  });
});

gulp.task('styles:framework', ['generate:tokens:sass'], () =>
  gulp
    .src('ui/index.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      precision: 10,
      includePaths: [
        paths.ui,
        paths.node_modules
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer({ remove: false }))
    .pipe(minifycss({ advanced: false, roundingPrecision: '-1' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.assets/styles'))
);

// Quick check that all variants compile correctly to CSS
gulp.task('styles:test', () =>
  gulp
    .src('ui/index-*.scss')
    .pipe(sass.sync({
      includePaths: [
        paths.node_modules
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('.assets/styles/.test'))
);

gulp.task('styles', callback => {
  runSequence('styles:framework', 'styles:test', callback);
});
