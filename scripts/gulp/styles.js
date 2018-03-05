// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import gulp from 'gulp';
import gulpAutoprefixer from 'gulp-autoprefixer';
import gulpUtil from 'gulp-util';
import gulpMinifycss from 'gulp-minify-css';
import gulpPlumber from 'gulp-plumber';
import gulpSass from 'gulp-sass';
import gulpSourcemaps from 'gulp-sourcemaps';
import StyleStats from 'stylestats';

import paths from '../helpers/paths';

const sign = x => (x < 0 ? '' : '+');
const toKB = n => (n / 1024).toFixed(2);

export const stylestats = done => {
  const localFile = 'assets/styles/slds.css';
  const remoteFile =
    'https://www.lightningdesignsystem.com/assets/styles/salesforce-lightning-design-system.css';

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

      gulpUtil.log(
        gulpUtil.colors.green(`slds.scss (minified):
            ${toKB(result.size)}KB (${toKB(result.gzippedSize)}KB gzipped)`)
      );

      gulpUtil.log(
        gulpUtil.colors.gray(
          `That's ${sign(diff.size)}${toKB(diff.size)}KB (${sign(
            diff.gzippedSize
          )}${diff.gzippedSize.toKB()}KB gzipped) than the current public version.`
        )
      );

      gulpUtil.log(`Additional stats:
            Rules: ${result.rules} (${sign(diff.rules)}${diff.rules})
            Selectors: ${result.selectors} (${sign(
        diff.selectors
      )}${diff.selectors})`);
      done(error, result);
    });
  });
};

export const sass = () =>
  gulp
    .src('ui/index.scss')
    .pipe(gulpPlumber())
    .pipe(gulpSourcemaps.init())
    .pipe(
      gulpSass
        .sync({
          precision: 10,
          includePaths: [paths.ui, paths.node_modules]
        })
        .on('error', gulpSass.logError)
    )
    .pipe(gulpAutoprefixer({ remove: false }))
    .pipe(gulpMinifycss({ advanced: false, roundingPrecision: '-1' }))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('assets/styles'));

// Quick check that all variants compile correctly to CSS
export const sassTest = () =>
  gulp
    .src('ui/index-*.scss')
    .pipe(
      gulpSass
        .sync({
          includePaths: [paths.node_modules]
        })
        .on('error', gulpSass.logError)
    )
    .pipe(gulp.dest('assets/styles/.test'));
