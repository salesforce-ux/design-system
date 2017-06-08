// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const paths = require('./helpers/paths');
const path = require('path');
const gulp = require('gulp');
const {bundle, LIB_FILENAME} = require('./bundle');

const createPreviewer = require('../../design-system-previewer');
//const createPreviewer = require('@salesforce-ux/design-system-previewer');

const { getComments, getMarkup } = require('./markup-style');
const { watchPaths, removeFromCache } = require('./watch');

require('./gulp/styles');

const getComments_ = done =>
  getComments().fork(done, x => done(null, x));

// TODO: rethink the whole markup == prevState.markup in Previewer
const addCacheBustToExamples = (hash, section) =>
  section.update('items', items =>
    items.map(item =>
      item.update('markup', markup =>
        markup.concat(hash)
      )
    )
  )

const BUNDLE_URL = 'assets/scripts';

// TODO: could just get sections - no markup necessary
const getMarkup_ = (component, variant, isUtility, done) =>
  bundle({component, variant, isUtility, outputUrl: BUNDLE_URL})
  .chain(stats =>
    getMarkup(component, variant, isUtility)
    .map(result =>
      result.update('sections', sections =>
        sections.map(section =>
          addCacheBustToExamples(stats.hash, section))
      )
    )
    .fold(
      Task.rejected,
      Task.of
    )
  )
  .fork(e => done(e),
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
  scriptUrl: `/${BUNDLE_URL}/${LIB_FILENAME}`,
  // get me some comments as a string
  getComments: getComments_,
  // get me some markup for a component/variant
  getMarkup: getMarkup_
});

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
  gulp.watch(watchPaths.js, event => {
    removeFromCache(require.resolve(event.path));
    emit('markup');
  });

  // CSS
  gulp.watch(watchPaths.css, event => {
    emit('styles');
  });

  console.log(`Previewer available at: http://localhost:${server.address().port}/preview`);
});
