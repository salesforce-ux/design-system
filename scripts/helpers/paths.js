// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-disable camelcase */

const path = require('path');

const root = path.resolve(__dirname, '../../');
const app_modules = path.resolve(root, 'app_modules');
const node_modules = path.resolve(root, 'node_modules');

module.exports = {
  root,
  app_modules,
  node_modules,

  assets: path.resolve(root, 'assets'),
  ui: process.env.NODE_ENV === 'test' ? path.resolve(root, "__fixtures__/ui") : path.resolve(root, 'ui'),
  designTokens: path.resolve(root, 'design-tokens'),

  icons: path.resolve(node_modules, '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons'),
  uiKit: path.resolve(node_modules, '@salesforce-ux/design-system-ui-kit'),

  dist: path.resolve(root, '.dist'),
  build: path.resolve(root, '.build'),
  generated: path.resolve(root, '.generated'),
  html: path.resolve(root, '.html'),
  tmp: path.resolve(root, '.tmp'),
  test: path.resolve(root, '.test'),
  logs: path.resolve(root, '.logs'),
  reports: path.resolve(root, '.reports')
};
