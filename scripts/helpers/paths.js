// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-disable camelcase */

const path = require('path');

const root = path.resolve(__dirname, '../../');
const rootPath = path.resolve.bind(path, root);

const node_modules = rootPath('node_modules');

const watchPaths = {
  css: [rootPath('assets/**/*.css')],
  sass: [rootPath('ui/**/*.scss'), rootPath('design-tokens/*.yml')],
  js: [
    rootPath('app_modules/**/*.{js,jsx}'),
    rootPath('ui/**/*.{js,jsx}'),
    rootPath('site/**/*.{js,jsx}')
  ],
  tokens: [
    rootPath('ui/**/tokens/*.yml'),
    rootPath('design-tokens/**/*.yml'),
    '!' + rootPath('design-tokens/components.yml')
  ]
};

module.exports = {
  root,
  rootPath,
  node_modules,

  assets: rootPath('assets'),
  ui: rootPath('ui'),
  designTokens: rootPath('design-tokens'),

  icons: path.resolve(
    node_modules,
    '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons'
  ),
  uiKit: path.resolve(node_modules, '@salesforce-ux/design-system-ui-kit'),

  dist: rootPath('.dist'),
  build: rootPath('.build'),
  generated: rootPath('.generated'),
  html: rootPath('.html'),
  tmp: rootPath('.tmp'),
  test: rootPath('.test'),
  logs: rootPath('.logs'),
  reports: rootPath('.reports'),

  watch: watchPaths
};
