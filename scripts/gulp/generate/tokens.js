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
    'aura.tokens',
  ],
  ios: ['ios.json'],
  android: ['android.xml'],
  raw: ['raw.json'],
})
  .map((formats, transform) =>
    formats.map((name) => ({
      name: name,
      transform: transform,
    }))
  )
  .flatten()
  .value();

// Pipe through every YAML file and generate a platform specific token file
export const packages = (done) => {
  const convert = ({ name, transform }, done) =>
    gulp
      .src(path.resolve(paths.designTokens, '*.yml'))
      .pipe(
        gulpTheo({
          transform: { type: transform },
          format: { type: name },
        })
      )
      .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist')))
      .on('finish', done);
  async.each(formatTransforms, convert, done);
};

// Pipe through every component specific YAML file and generate a file of imports
//
// components.yml
//  # File generated automatically, do not edit manually
//    imports:
//      - ../ui/components/avatar-group/tokens/background-color.yml
//      - ../ui/components/badges/tokens/background-color.yml
//      ...
export const componentsImports = () =>
  gulp
    .src(path.resolve(paths.ui, 'components/**/tokens/**/*.yml'))
    .pipe(gulpUtil.buffer())
    .pipe(
      through.obj((files, enc, next) => {
        const filepaths = files.map((file) => file.path).sort();
        const componentTokenImports = filepaths.reduce(
          (prev, filepath) =>
            `${prev}\n- ${path.relative(paths.designTokens, filepath)}`,
          '# File generated automatically, do not edit manually\nimports:'
        );
        const file = new Vinyl({
          path: 'components.yml',
          contents: Buffer.from(componentTokenImports),
        });
        next(null, file);
      })
    )
    .pipe(gulp.dest(paths.designTokens));

// Copy @salesforce-ux/design-system-primitive-token aliases to design-tokens folder
export const copyDesignPrimitiveAliases = () =>
  gulp
    .src(path.resolve(paths.designPrimitiveTokens, 'design-tokens/aliases/*'))
    .pipe(gulp.dest(path.resolve(paths.designTokens, 'aliases')));

// Copy @salesforce-ux/design-system-primitive-token tokens to design-tokens folder
export const copyDesignPrimitiveTokens = () =>
  gulp
    .src(
      path.resolve(paths.designPrimitiveTokens, 'design-tokens/primitive/**')
    )
    .pipe(gulp.dest(path.resolve(paths.designTokens, 'primitive')));
