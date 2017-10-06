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
const { toList } = require('@salesforce-ux/design-system-previewer/lib/tree');
const paths = require('../helpers/paths');
const path = require('path');
const { beautify: prettyHTML } = require('../../shared/utils/beautify');
const glob = require('glob');

gulp.task('generate:wrappedexamples', ['generate:examples'], () =>
  gulp
    .src(`${paths.generated}/examples/*.html`)
    .pipe(
      insert.wrap(
        '<!DOCTYPE html><html lang="en"><head><title>Example</title><link type="text/css" rel="stylesheet" href="../assets/styles/index.css" /></head><body>',
        '</body></html>'
      )
    )
    .pipe(gulp.dest(paths.html))
);

const getFileName = (component, variant, item) =>
  I.List.of(component.get('id'), variant.get('id'), item.get('id')).join('_');

const getWrappedElement = item =>
  item.get('Context')
    ? React.createElement(item.get('Context'), null, item.get('element'))
    : item.get('element');

const render = item =>
  React.isValidElement(item.get('element'))
    ? prettyHTML(ReactDOM.renderToStaticMarkup(getWrappedElement(item)))
    : `FAILED: ${item.get('id')}`;

const transform = stream => (file, encoding, callback) => {
  const json = JSON.parse(String(file.contents));
  stream.write(
    new gutil.File({
      path: `${path.basename(file.path, 'json')}html`,
      contents: Buffer.from(json.snapshot.html)
    })
  );
  callback();
};

gulp.task('generate:examples', () => {
  const stream = through.obj();
  ui()
    .chain(uiJSON =>
      Task.of(createInstance(uiJSON)).map(SLDS =>
        uiJSON.get('components').map(comp =>
          SLDS.variants(comp)
            .filter(variant => variant.get('showcasePath'))
            .map(variant =>
              showcase(variant.get('showcasePath'), true).map(section =>
                section.get('items').map(i =>
                  stream.write(
                    new gutil.File({
                      path: `${getFileName(comp, variant, i)}.html`,
                      contents: Buffer.from(render(i))
                    })
                  )
                )
              )
            )
        )
      )
    )
    .fork(
      e => {
        throw e;
      },
      () => stream.end()
    );

  return stream.pipe(gulp.dest(`${paths.generated}/examples`));
});
