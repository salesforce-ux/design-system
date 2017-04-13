// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const path = require('path');
const gulp = require('gulp');

const paths = require('../helpers/paths');

const getPath = (a, b) => path.resolve(paths[a], (b || ''));

gulp.task('assets:icons', () =>
  gulp
    .src(getPath('icons', '**/*.{svg,png}'), {
      base: paths.icons
    })
    .pipe(gulp.dest('.assets/icons'))
);

gulp.task('assets', () =>
  gulp
    .src([
      'assets/fonts/**/*',
      'assets/images/**/*'
    ], {
      base: 'assets'
    })
    .pipe(gulp.dest('.assets'))
);
