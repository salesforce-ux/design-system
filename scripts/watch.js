// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

exports.watchPaths = {
  css: ['assets/**/*.css'],
  sass: ['ui/**/*.scss', 'design-tokens/*.yml'],
  js: ['app_modules/**/*.{js,jsx}', 'ui/**/*.{js,jsx}', 'site/**/*.{js,jsx}'],
  tokens: [
    'ui/**/tokens/*.yml',
    'design-tokens/**/*.yml',
    '!design-tokens/components.yml'
  ]
};
