// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import { toList } from '@salesforce-ux/design-system-previewer/lib/tree';
import Task from 'data.task';
import Immutable from 'immutable';
import glob from 'glob';
import gulp from 'gulp';
import gulpInsert from 'gulp-insert';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import through from 'through2';
import Vinyl from 'vinyl';

import { beautify as prettyHTML } from '../../../shared/utils/beautify';

import createInstance from '../../lib';
import paths from '../../helpers/paths';
import showcase from '../../ui/showcase';
import { ui } from '../../ui';

const getFileName = (component, variant, item) =>
  Immutable.List
    .of(component.get('id'), variant.get('id'), item.get('id'))
    .join('_');

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
    new Vinyl({
      path: `${path.basename(file.path, 'json')}html`,
      contents: Buffer.from(json.snapshot.html)
    })
  );
  callback();
};

export const wrapped = () =>
  gulp
    .src(`${paths.generated}/examples/*.html`)
    .pipe(
      gulpInsert.wrap(
        '<!DOCTYPE html><html lang="en"><head><title>Example</title><link type="text/css" rel="stylesheet" href="../assets/styles/index.css" /></head><body>',
        '</body></html>'
      )
    )
    .pipe(gulp.dest(paths.html));

export { default as unwrappedDocs } from './examples.docs';

export const unwrapped = () => {
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
                    new Vinyl({
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
};
