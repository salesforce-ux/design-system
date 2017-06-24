// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const gutil = require('gulp-util');
const I = require('immutable');
const Task = require('data.task');
const insert = require('gulp-insert');
const through = require('through2');
const React = require('react');
const ReactDOM = require('react-dom/server');
const showcase = require('../ui/showcase');

const { ui } = require('../ui');
const createInstance = require('../lib');
const {toList} = require('@salesforce-ux/design-system-previewer/lib/tree');
const paths = require('../helpers/paths');

gulp.task('generate:wrappedexamples', ['generate:examples'], () =>
  gulp
    .src(`${paths.generated}/examples/*.html`)
    .pipe(insert.wrap('<!DOCTYPE html><html lang="en"><head><title>Example</title><link type="text/css" rel="stylesheet" href="../.assets/styles/index.css" /></head><body>', '</body></html>'))
    .pipe(gulp.dest(paths.html)));

const getFileName = (component, variant, item) =>
  I.List.of(
    component.get('id'),
    variant.get('id'),
    item.get('id')
  ).join('_');

const render = item =>
  React.isValidElement(item.get('element'))
  ? ReactDOM.renderToStaticMarkup(item.get('element'))
  : `FAILED: ${item.get('id')}`

gulp.task('generate:examples', () => {
  const stream = through.obj();
  ui()
  .chain(uiJSON =>
    Task.of(createInstance(uiJSON))
    .map(SLDS =>
      uiJSON.forEach((group, name) =>
        group.forEach(item =>
          SLDS.variants(item)
          .forEach(variant =>
            showcase(item.get('id'), variant.get('id'), name === 'utilities', true)
            .getOrElse(I.List())
            .forEach(section =>
              section.get('items')
              .forEach(i =>
                stream.write(new gutil.File({
                  path: `${getFileName(item, variant, i)}.html`,
                  contents: Buffer.from(render(i))
                }))
              )
            )
          )
        )
      )
    )
  ).fork(
    e => { throw e; },
    () => stream.end()
  )
  return stream
    .pipe(gulp.dest(`${paths.generated}/examples`));
});
