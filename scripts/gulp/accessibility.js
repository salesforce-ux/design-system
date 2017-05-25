// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const args = require('yargs').argv;
const axe = require('gulp-axe-webdriver');

const parseComponentArgs = (components) =>
  components.map((comp) => `.html/${comp}*.html`);

const urlsToTest = (args.components)
  ? parseComponentArgs(args.components.split(','))
  : ['.html/*.html'];

// gulp a11y
// gulp a11y --components path
// gulp a11y --components path,tabs,data-tables
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
    urls: urlsToTest,
    showOnlyViolations: true
  };
  return axe(options, done);
});
