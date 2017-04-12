// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import './scripts/helpers/setup';

import del from 'del';
import gulp from 'gulp';
import nconf from 'nconf';
import path from 'path';
import runSequence from 'run-sequence';

import './app_modules/util/lodash_id_overwrite';
import './scripts/gulp/accessibility';
import './scripts/gulp/assets';
import './scripts/gulp/generate-examples';
import './scripts/gulp/generate-tokens-components';
import './scripts/gulp/lint';
import './scripts/gulp/styles';

nconf.formats.yaml = require('nconf-yaml');

// NOTE: Don't remove reports on purpose. This exception is already fixed on the remove-website branch.
gulp.task('clean', () => del.sync([
  __PATHS__.generated,
  __PATHS__.tmp,
  __PATHS__.dist,
  __PATHS__.logs,
  __PATHS__.build,
  // __PATHS__.reports, OMITTED FOR NOW
  __PATHS__.html,
  path.join(__PATHS__.designTokens, 'dist')
]));

gulp.task('build', callback => {
  runSequence(
    'clean',
    [
      'assets',
      'assets:icons',
      'generate:tokens:all',
      'generate:examples'
    ],
    'styles',
  callback);
});
