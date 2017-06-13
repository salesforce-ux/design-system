// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const gutil = require('gulp-util');
const I = require('immutable');
const Task = require('data.task');
const insert = require('gulp-insert');
const through = require('through2');

const { ui, examples, isVariant } = require('../ui');
const {toList} = require('@salesforce-ux/design-system-previewer/lib/tree');
const paths = require('../helpers/paths');

gulp.task('generate:wrappedexamples', ['generate:examples'], () =>
  gulp
    .src(`${paths.generated}/examples/*.html`)
    .pipe(insert.wrap('<!DOCTYPE html><html lang="en"><head><title>Example</title><link type="text/css" rel="stylesheet" href="../.assets/styles/index.css" /></head><body>', '</body></html>'))
    .pipe(gulp.dest(paths.html)));

const defaultItem = markup =>
  I.fromJS({title: 'default', items: [{id: 'default', markup}]});

gulp.task('generate:examples', () => {
  const stream = through.obj();
  Task.of(ui => examples => [ui, examples])
  .ap(ui())
  .ap(examples().map(es => es.get('components')))
  .fork(() => {}, ([ui, examples]) => {
    ui
    .get('components')
    .forEach(component => {
      toList(component)
      .filter(isVariant)
      .forEach(variant => {
        examples.get(component.get('id')).get(variant.get('id')).get('sections')
        .unshift(defaultItem(variant.get('markup')))
        .forEach(section => {
          section.get('items')
          .forEach(item => {
            const name = I.List.of(
              component.get('id'),
              variant.get('id'),
              item.get('id')
            ).join('_');
            const markupContext = variant.get('markupContext');
            const markup = I.List.of(
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
