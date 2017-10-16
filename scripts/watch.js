// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const _ = require('lodash');
const path = require('path');

/**
 * Remove a module from the cache
 *
 * @param {string} id
 */
export const removeFromCache = (() => {
  const patterns = ['app_modules', 'site'].map(
    k => new RegExp(_.escapeRegExp(path.resolve(__dirname, k)))
  );
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
  css: ['assets/**/*.css', 'assets/**/*.rtl.css'],
  sass: ['ui/**/*.scss', 'ui/**/*.rtl.scss', 'design-tokens/*.yml'],
  js: ['app_modules/**/*.{js,jsx}', 'ui/**/*.{js,jsx}', 'site/**/*.{js,jsx}'],
  tokens: [
    'ui/**/tokens/*.yml',
    'design-tokens/**/*.yml',
    '!design-tokens/components.yml'
  ]
};
