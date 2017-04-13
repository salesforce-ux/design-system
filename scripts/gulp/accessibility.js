// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const axe = require('gulp-axe-webdriver');

gulp.task('a11y', ['generate:wrappedexamples'], (done) => {
  const options = {
    folderOutputReport: '.reports',
    saveOutputIn: 'a11y.json',
    browser: 'phantomjs',
    a11yCheckOptions: {
      'rules': {
        'bypass': { enabled: false }
      }
    },
    urls: ['.html/*.html'],
    showOnlyViolations: true
  };
  return axe(options, done);
});
