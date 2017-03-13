// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import _ from 'lodash';
import path from 'path';

/**
 * Remove a module from the cache
 *
 * @param {string} id
 */
export const removeFromCache = (() => {
  const patterns = ['app_modules', 'site'].map(k =>
    new RegExp(_.escapeRegExp(path.resolve(__dirname, k))));
  const shouldRemove = id =>
    patterns.reduce((allow, pattern) => allow || pattern.test(id), false);
  return id => {
    const m = require.cache[id];
    if (m) {
      delete require.cache[id];
      let parent = m.parent;
      while (parent && shouldRemove(parent.id)) {
        delete require.cache[parent.id];
        parent = parent.parent;
      }
    }
  };
})();

export const watchPaths = {
  css: [
    '.www/**/*.css',
  ],
  sass: [
    'site/assets/styles/**/*.scss',
    'ui/**/*.scss',
    'design-tokens/*.yml'
  ],
  pages: [
    'ui/**/*.{md,yml}',
    '!ui/**/tokens/*.yml'
  ],
  js: [
    'app_modules/**/*.{js,jsx}',
    'ui/**/*.{js,jsx}',
    'site/**/*.{js,jsx}'
  ],
  tokens: [
    'ui/**/tokens/*.yml',
    'design-tokens/**/*.yml',
    '!design-tokens/components.yml'
  ]
};
