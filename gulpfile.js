// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

require('babel-register');

const del = require('del');
const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');

const paths = require('./scripts/helpers/paths');

require('./scripts/gulp/accessibility');
require('./scripts/gulp/generate-examples');
require('./scripts/gulp/generate-tokens-components');
require('./scripts/gulp/lint');
require('./scripts/gulp/styles');

// NOTE: Don't remove reports on purpose.
// This exception is already fixed on the remove-website branch.
gulp.task('clean', () => del.sync([
  paths.generated,
  paths.tmp,
  paths.dist,
  paths.logs,
  paths.build,
  // paths.reports, OMITTED FOR NOW
  paths.html,
  path.join(paths.designTokens, 'dist')
]));

gulp.task('build', callback => {
  runSequence(
    'clean',
    [
      'generate:tokens:all',
      'generate:examples'
    ],
    'styles',
  callback);
});
