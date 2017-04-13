// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const gutil = require('gulp-util');
const Immutable = require('immutable');
const insert = require('gulp-insert');
const through = require('through2');

const { ui, reduceTree } = require('../ui');
const paths = require('../helpers/paths');

gulp.task('generate:wrappedexamples', ['generate:examples'], () =>
  gulp
    .src(`${paths.generated}/examples/*.html`)
    .pipe(insert.wrap('<!DOCTYPE html><html lang="en"><head><title>Example</title><link type="text/css" rel="stylesheet" href="../.assets/styles/index.css" /></head><body>', '</body></html>'))
    .pipe(gulp.dest(paths.html)));

gulp.task('generate:examples', () => {
  const stream = through.obj();
  ui().fork(() => {}, ui => {
    ui.get('components').forEach(component => {
      reduceTree((a, b) => a.push(b), Immutable.List(), component)
        .filter(n => n.hasIn(['annotations', 'variant']))
        .forEach(variant => {
          variant.get('markup')
            .filter(section => section.get('title') !== 'examples')
            .forEach(section => {
              section.get('items').forEach(item => {
                const name = Immutable.List.of(
                  component.get('id'),
                  variant.get('id'),
                  item.get('id')
                ).join('_');
                const markupContext = variant.get('markupContext');
                const markup = Immutable.List.of(
                  markupContext.get(0, ''),
                  item.get('markup'),
                  markupContext.get(1, '')
                ).join('');
                stream.write(new gutil.File({
                  path: `${name}.html`,
                  contents: Buffer.from(markup)
                }));
              });
            });
        });
    });
    stream.end();
  });
  return stream
    .pipe(gulp.dest(`${paths.generated}/examples`));
});
