// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const paths = require('./helpers/paths');
const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack');
const Bundle = require('./compile/bundle')(webpack);
const bundleConfig = Bundle.configs.umd;
const bundlePath = path.resolve(__dirname, '../assets/scripts');

const createPreviewer = require('@salesforce-ux/design-system-previewer');

const { getComments, getMarkup } = require('./markup-style');
const { watchPaths, removeFromCache } = require('./watch');

require('./gulp/styles');

const getComments_ = done =>
  getComments().fork(done, x => done(null, x));

// TODO: could just get sections - no markup necessary. ui.examples.json
const getMarkup_ = (component, variant, isUtility, done) =>
  getMarkup(component, variant, isUtility)
  .fold(e => done(e),
        markup => done(null, markup));

const previewer = createPreviewer({
  // where are your static assets
  publicPath: {
    '/assets': [ path.resolve(__dirname, '../assets') ],
    '/assets/icons': [ paths.icons ]
  },
  // where is your css?
  cssUrl: '/assets/styles/index.css', // ignored by git
  // get me the js bundle
  scriptUrl: `/assets/scripts/${bundleConfig.getIn(['output', 'filename'])}`,
  // get me some comments as a string
  getComments: getComments_,
  // get me some markup for a component/variant
  getMarkup: getMarkup_
});

const listen = () =>
  previewer.listen(3003, ({ server, emit }) => {
    // Sass
    const sassWatcher = gulp.watch(
      watchPaths.sass,
      ['styles:sass'] // This will trigger watchPaths.css
    );

    const tokenWatcher = gulp.watch(
      watchPaths.tokens,
      ['styles:framework']
    );

    sassWatcher.on('change', () => {
      emit('comments');
    });

    gulp.start('styles:framework');

    // JS
    Bundle.watch(bundleConfig, bundlePath)
    .fork(
      e => {throw e},
      stats => emit('markup')
    );

    // CSS
    gulp.watch(watchPaths.css, event => {
      emit('styles');
    });

    console.log(`Previewer available at: http://localhost:${server.address().port}/preview`);
  });

console.log('Start compiling JS library for Previewer...')
Bundle.compile(bundleConfig, bundlePath)
.fork(e => {throw e}, listen);
