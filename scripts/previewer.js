// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import { exec } from 'child_process';
import Task from 'data.task';
import I from 'immutable';
import _ from 'lodash';
import ms from 'ms';
import gulp from 'gulp';
import path from 'path';

import '../gulpfile';

import Bundle from './compile/bundle';
import paths from './helpers/paths';
import { writeToDist } from './ui';

const createPreviewer =
  process.env.SLDS_PREVIEWER === 'development'
    ? require('../../design-system-previewer')
    : require('@salesforce-ux/design-system-previewer');

const previewer = createPreviewer({
  // where are your static assets
  publicPath: {
    '/assets': [path.resolve(__dirname, '../assets')],
    '/dist': [path.resolve(__dirname, '../.dist/')],
    '/assets/icons': [paths.icons]
  },
  // where is your css?
  cssUrl: '/assets/styles/index.css', // ignored by git
  // get me the js bundle
  scriptUrl: `/dist/__internal/slds.umd.js`
});

const listen = () =>
  previewer.listen(3003, ({ server, emit }) => {
    const emitReady = _.once(() => emit('ready'));
    const emitStyles = done => {
      emit('styles');
      done();
    };

    // Sass
    const sassWatcher = gulp.watch(
      paths.watch.sass,
      gulp.series('styles:sass', emitStyles)
    );

    // Tokens
    gulp.watch(paths.watch.tokens, gulp.series('styles', emitStyles));

    // Annotations
    sassWatcher.on('change', event => {
      writeToDist().fork(console.error, () => {
        emit('bundle');
      });
    });

    gulp.series('styles')();

    // Webpack
    Bundle.watch().fork(
      e => {
        throw e;
      },
      stats => {
        console.log(
          `[previewer]: recompiled bundle in ${ms(
            stats.endTime - stats.startTime
          )}`
        );
        emit('bundle');
        emitReady();
      }
    );
  });

console.log('Start compiling JS library for Previewer...');

writeToDist().fork(console.error, listen);
