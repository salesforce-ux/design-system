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
  designPrimitiveTokens: path.resolve(
    node_modules,
    '@salesforce-ux/design-system-primitive-tokens'
  ),
  sldsStylingHooksProps: rootPath('styling-hooks'),
  /**
   * Note: The path to the sdsStylingHooksProps below are related to WCAG.
   * In v2 of the sds-styling-hooks package, the props are no longer available.
   * Due to these structural changes, props files from v1 are copied over temporarily.
   * Those files can be removed once we merge WCAG with the global hooks.
   * See:
   * - `design-system-internal/scripts/gulp/generate/styling-hooks.js`
   * - `design-system-internal/styling-hooks/slds-hooks.json`
   */
  // Old sds-styling-hooks package 1.1.0-alpha.2
  // sdsStylingHooksProps: path.resolve(
  //   node_modules,
  //   '@salesforce-ux/sds-styling-hooks/src/props'
  // ),
  // New sds-styling-hooks package 2.0.0.beta.5
  sdsStylingHooksProps: path.resolve(
    root,
    'styling-hooks/@salesforce-ux-old-temp/sds-styling-hooks/src/props'
  ),
  sdsStylingAliases: path.resolve(
    node_modules,
    '@salesforce-ux/sds-styling-aliases/dist'
  ),
  icons: path.resolve(
    node_modules,
    '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons'
  ),
  uiKit: path.resolve(node_modules, '@salesforce-ux/design-system-ui-kit'),

  css: rootPath('.css'),
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
