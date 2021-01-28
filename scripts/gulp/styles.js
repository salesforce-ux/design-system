// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import fs from 'fs';
import cssStats from 'cssstats';
import fetch from 'isomorphic-fetch';
import gulp from 'gulp';
import gulpPlumber from 'gulp-plumber';
import gulpSourcemaps from 'gulp-sourcemaps';
import combineMediaQuery from 'postcss-combine-media-query';
import annotationsParser from '@salesforce-ux/postcss-annotations-parser';
import cssVariableValue from '@salesforce-ux/postcss-css-variable-value';

import gulpFile from 'gulp-file';
import gulpRename from 'gulp-rename';

import paths from '../helpers/paths';
import * as gulpHelpers from '../helpers/gulp';
import { compileModularCSS } from '../compile/modular-css';
import { extractVarsFromSLDS } from '../var-extract';
import convertDataUri from './plugins/data-uri';

export const stats = done => {
  console.log('Gathering stats...');
  const localCss = fs.readFileSync(
    paths.rootPath('assets/styles/index.css'),
    'utf8'
  );

  const getDiff = (base, source) => {
    const sanitizedBase = base.replace(/(KB)/, '');
    const sanitizedSource = source.replace(/(KB)/, '');
    const percentage = Math.round(
      ((sanitizedSource - sanitizedBase) / sanitizedBase) * 100
    );
    if (base > source) {
      return `${sanitizedSource - sanitizedBase}KB (${percentage}%)`;
    } else {
      return `${sanitizedSource - sanitizedBase}KB (${percentage}%)`;
    }
  };

  fetch(
    'https://www.lightningdesignsystem.com/assets/styles/salesforce-lightning-design-system.min.css'
  )
    .then(res => res.text())
    .then(file => {
      const remoteStats = cssStats(file);
      const localStats = cssStats(localCss);
      const remote = {
        remote: {
          size: remoteStats.humanizedSize,
          gzip: remoteStats.humanizedGzipSize
        }
      };
      const local = {
        local: {
          size: localStats.humanizedSize,
          gzip: localStats.humanizedGzipSize
        }
      };
      const diff = {
        diff: {
          size: getDiff(remoteStats.humanizedSize, localStats.humanizedSize),
          gzip: getDiff(
            remoteStats.humanizedGzipSize,
            localStats.humanizedGzipSize
          )
        }
      };
      console.log([remote, local, diff]);
    })
    .catch(err => console.error(err));
  done();
};

export const sass = () =>
  gulp
    .src(['ui/index.scss'])
    .pipe(gulpPlumber())
    .pipe(gulpSourcemaps.init())
    .pipe(gulpHelpers.writeScss())
    .pipe(gulpHelpers.writePostCss())
    .pipe(gulpHelpers.writeMinifyCss())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('assets/styles'));

export const sassTouch = () =>
  gulp
    .src(['ui/touch.scss'])
    .pipe(gulpPlumber())
    .pipe(gulpSourcemaps.init())
    .pipe(gulpHelpers.writeScss())
    .pipe(gulpHelpers.writePostCss([combineMediaQuery]))
    .pipe(gulpHelpers.writeMinifyCss())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('assets/styles'));

export const sassTouchDemo = () =>
  gulp
    .src(['ui/touch-demo.scss'])
    .pipe(gulpPlumber())
    .pipe(gulpSourcemaps.init())
    .pipe(gulpHelpers.writeScss())
    .pipe(gulpHelpers.writePostCss())
    .pipe(gulpHelpers.writeMinifyCss())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('assets/styles'));

export const componentCSS = done =>
  gulp.task(
    'generate:compileModularCSS',
    compileModularCSS({ suppressStdout: true, callback: done })
  );

export const extractStyleHooks = done =>
  gulp.task(
    'generate:extractStyleHooks',
    extractVarsFromSLDS({ suppressOutput: true, callback: done })
  );

export const cssLegacy = () =>
  gulp
    .src(['ui/legacy.scss'])
    .pipe(gulpPlumber())
    .pipe(gulpSourcemaps.init())
    .pipe(gulpRename('index-css-variable-fallbacks.css'))
    .pipe(gulpHelpers.writeScss())
    .pipe(
      gulpHelpers.writePostCss([
        annotationsParser({ preserve: false }),
        cssVariableValue({ preserve: false })
      ])
    )
    .pipe(gulpHelpers.writeMinifyCss())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('assets/styles'));

export const offline = () =>
  gulp
    .src(['ui/index.scss'])
    .pipe(gulpPlumber())
    .pipe(gulpSourcemaps.init())
    .pipe(gulpRename('index-offline.css'))
    .pipe(gulpHelpers.writeScss())
    .pipe(gulpHelpers.writePostCss([convertDataUri()]))
    .pipe(gulpHelpers.writeMinifyCss())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('assets/styles'));

// Quick check that all variants compile correctly to CSS
export const sassTest = () =>
  gulp
    .src('ui/index-*.scss')
    .pipe(gulpHelpers.writeScss())
    .pipe(gulp.dest('assets/styles/.test'));

// Generate versions of SLDS for each set of form factor tokens
export const sassFormFactors = () => {
  let template = tokens => `
      // Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
      // Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
      // Load SLDS from the process.env.SLDS__FRAMEWORK__PATH
      $brand-background-primary: #ffffff;
      @import 'design-tokens/dist/${tokens}';
      @import 'ui/index.scss';
    `;
  let files = [
    {
      name: 'slds-large',
      tokens: 'form-factor-large.default.scss'
    },
    {
      name: 'slds-medium',
      tokens: 'form-factor-medium.default.scss'
    },
    {
      name: 'slds-small',
      tokens: 'form-factor-small.default.scss'
    }
  ];

  return files
    .reduce(
      (src, file) => src.pipe(gulpFile(file.name, template(file.tokens))),
      gulp.src('styles/EMPTY/*.scss')
    )
    .pipe(gulpHelpers.writeScss())
    .pipe(gulpHelpers.writePostCss())
    .pipe(gulpHelpers.writeMinifyCss())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('assets/styles'));
};
