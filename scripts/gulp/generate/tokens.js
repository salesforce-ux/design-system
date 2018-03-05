// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import async from 'async';
import gulp from 'gulp';
import gulpTheo from 'gulp-theo';
import gulpUtil from 'gulp-util';
import _ from 'lodash';
import path from 'path';
import through from 'through2';
import Vinyl from 'vinyl';

import paths from '../../helpers/paths';

// Some transforms are commented out because the use cases are lacking
let formatTransforms = _({
  web: [
    'styl',
    'less',
    'default.scss',
    'map.scss',
    'json',
    'common.js',
    'aura.tokens'
  ],
  ios: ['ios.json'],
  android: ['android.xml']
})
  .map((formats, transform) =>
    formats.map(name => ({
      name: name,
      transform: transform
    }))
  )
  .flatten()
  .value();

export const all = done => {
  const convert = ({ name, transform }, done) =>
    gulp
      .src(path.resolve(paths.designTokens, '*.yml'))
      .pipe(
        gulpTheo.plugin({
          transform: { type: transform },
          format: { type: name }
        })
      )
      .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist')))
      .on('finish', done);
  async.each(formatTransforms, convert, done);
};

export const sassDefault = () =>
  gulp
    .src(path.resolve(paths.designTokens, '*.yml'))
    .pipe(
      gulpTheo.plugin({
        transform: { type: 'web' },
        format: { type: 'default.scss' }
      })
    )
    .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist')));

export const sassMap = () =>
  gulp
    .src(path.resolve(paths.designTokens, '*.yml'))
    .pipe(
      gulpTheo.plugin({
        transform: { type: 'web' },
        format: { type: 'map.scss' }
      })
    )
    .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist')));

export const componentsImports = () =>
  gulp
    .src(path.resolve(paths.ui, 'components/**/tokens/**/*.yml'))
    .pipe(gulpUtil.buffer())
    .pipe(
      through.obj((files, enc, next) => {
        const filepaths = files.map(file => file.path).sort();
        const componentTokenImports = filepaths.reduce(
          (prev, filepath) =>
            `${prev}\n- ${path.relative(paths.designTokens, filepath)}`,
          '# File generated automatically, do not edit manually\nimports:'
        );
        const file = new Vinyl({
          path: 'components.yml',
          contents: Buffer.from(componentTokenImports)
        });
        next(null, file);
      })
    )
    .pipe(gulp.dest(paths.designTokens));
