// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const async = require('async');
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const theo = require('theo');
const through = require('through2');
const _ = require('lodash');

const paths = require('../helpers/paths');

// Some transforms are commented out because the use cases are lacking
let formatTransforms = _({
  'web': [
    'styl',
    'less',
    'default.scss',
    'map.scss',
    'json',
    'common.js',
    'aura.tokens'
  ],
  'ios': ['ios.json'],
  'android': ['android.xml']
}).map((formats, transform) =>
  formats.map((name) => ({
    name: name,
    transform: transform
  }))
).flatten().value();

gulp.task('generate:tokens:all', ['generate:tokens:components:imports'], (done) => {
  const convert = ({name, transform}, done) =>
    gulp.src(path.resolve(paths.designTokens, '*.yml'))
      .pipe(theo.plugins.transform(transform))
      .pipe(theo.plugins.format(name))
      .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist')))
      .on('finish', done);
  async.each(formatTransforms, convert, done);
});

gulp.task('generate:tokens:sass:default', () =>
  gulp.src(path.resolve(paths.designTokens, '*.yml'))
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('default.scss'))
    .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist'))));

gulp.task('generate:tokens:sass:map', () =>
  gulp.src(path.resolve(paths.designTokens, '*.yml'))
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('map.scss'))
    .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist'))));

gulp.task('generate:tokens:sass', ['generate:tokens:sass:default', 'generate:tokens:sass:map']);

gulp.task('generate:tokens:components:imports', (done) =>
  gulp.src(path.resolve(paths.ui, 'components/**/tokens/**/*.yml'))
    .pipe(gutil.buffer())
    .pipe(through.obj((files, enc, next) => {
      const filepaths = files.map((file) => file.path).sort();
      const componentTokenImports = filepaths.reduce((prev, filepath) =>
          `${prev}\n- ${path.relative(paths.designTokens, filepath)}`
        , '# File generated automatically, do not edit manually\nimports:');
      const file = new gutil.File({
        path: 'components.yml',
        contents: Buffer.from(componentTokenImports)
      });
      next(null, file);
    }))
    .pipe(gulp.dest(paths.designTokens))
);
