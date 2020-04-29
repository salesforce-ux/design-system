// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import fs from 'fs';
import I from 'immutable';
import path from 'path';
import gulp from 'gulp';
import gulpRename from 'gulp-rename';
import through from 'through2';
import discardComments from 'postcss-discard-comments';
import { toList } from '../../../shared/utils/tree';
import paths from '../../helpers/paths';
import * as gulpHelpers from '../../helpers/gulp';
import { uiJson } from '../../ui';

const MODULE_NAME = 'salesforce-lightning-design-system';

/**
 * Store paths
 */
const root = path.resolve(__dirname, '../../../');
const rootPath = path.resolve.bind(path, root);
const distPath = path.resolve.bind(path, paths.dist);

/**
 * Regex to remove BEM -- modifier from source
 */
export const regex = [
  /(\.\S.*[\S]+.(--)+.*)(\,)+?\B/g,
  /\,[\n\s]*(\.\S.*[\S]+.(--)+.*)\b(\s|\]\))/g
];

/**
 * Store ui.json in a keyed collection object
 * Map : string -> object
 */
const ui = I.Map(JSON.parse(uiJson()));

/**
 * Parse ui.json and store components from collection since we're
 * only concerned about components and not utilities
 * fromJs : object -> Map
 */
const components = I.fromJS(ui.get('components'));

/**
 * Empty array to store components that match the annotations we're looking for
 */
let rollup = [];

/**
 * Helper function to store paths in a friendly way
 * @param {string} c - Top level component
 * @param {string} v - Component variant, if it exists
 * setPath : component, variant -> string
 */
const setPath = (c, v) => {
  const component = c.get('id');
  const variant = c.get('id') === v.get('id') ? 'base' : v.get('id');
  return `${component}/${variant}`;
};

/**
 * Parse and store import paths based on lwc annotations
 * @param {Map} c - Immutable Map of components
 */
const readLwcAnnotations = c => {
  c.map(x => {
    toList(x)
      .filter(item => item.getIn(['annotations', 'lwc']))
      .map(z => rollup.push(setPath(x, z)));
  });
};

/**
 * Writes a new scss file into ui/components that has the imports for
 * all components with @lwc annotations
 * @param {array} packages
 * @note Will sort alphabetically
 */
export const writeSanitizedScssFile = packages => {
  const file = rootPath('ui/components/_index.sanitized.scss');
  let pathImports = [];
  packages.map(t => {
    pathImports.push(`@import '${t}/index';`);
  });
  let content = [
    '// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved',
    '\n',
    '// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license',
    '\n\n',
    pathImports.sort((a, b) => a.localeCompare(b)).join('\n'),
    '\n'
  ].join('');

  try {
    fs.writeFileSync(file, content);
  } catch (err) {
    console.log(`Unable to write file - ${err}`);
  }
};

/**
 * Writes a new css file into ui/components that has the imports for
 * all components with @lwc annotations, this file is for lwc to chunk
 * files using @import statements
 * @param {array} packages
 * @note Will sort alphabetically
 */
export const writeSanitizedCssFile = packages => {
  const file = distPath(`assets/styles/${MODULE_NAME}-imports.sanitized.css`);
  let pathImports = [];
  packages.map(t => {
    pathImports.push(`@import '../../css/${t}/index.css';`);
  });
  let content = [
    '/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved',
    '\n',
    'Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */',
    '\n\n',
    "@import '../../css/common/index.css';",
    '\n',
    pathImports.sort((a, b) => a.localeCompare(b)).join('\n'),
    '\n'
  ].join('');

  try {
    fs.writeFileSync(file, content);
  } catch (err) {
    console.log(`Unable to write file - ${err}`);
  }
};

/**
 * We need to dynamically generate a common file to be used as an import
 * @param {callback} done
 */
export const writeCommonCss = done => {
  const dir = rootPath(`.css/common`);
  const file = rootPath(`${dir}/index.scss`);
  let content = [
    '/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved',
    '\n',
    'Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */',
    '\n\n',
    "@import '.dist/scss/init';",
    '\n',
    "@import '.dist/scss/vendor/normalize-sanitized';",
    '\n',
    '@include core($scoped: false, $globals: false);',
    '\n'
  ].join('');
  try {
    if (fs.existsSync(dir)) {
      fs.writeFileSync(file, content);
    } else {
      fs.mkdir(dir, err => {
        if (err) throw err;
        fs.writeFileSync(file, content);
      });
    }
  } catch (err) {
    console.log(`Unable to write file - ${err}`);
  }
  if (done) done();
};

/**
 * Write sanitized version to assets/styles so it can be copied
 * and minified with dist script runs
 */
export const writeSanitizedCss = done => {
  gulp
    .src('ui/index-sanitized.scss')
    .pipe(gulpHelpers.writeScss({ outputStyle: 'expanded' }))
    .pipe(gulpHelpers.writePostCss([discardComments()]))
    // Need to format to ensure proper parsing
    .pipe(gulpHelpers.writePrettierCss())
    // Remove BEM -- modifiers
    .pipe(
      through.obj((file, enc, next) => {
        let newFile = file.clone();
        newFile.contents = Buffer.from(
          file.contents
            .toString()
            .replace(regex[0], '')
            .replace(regex[1], '')
        );
        return next(null, newFile);
      })
    )
    // For cleanup
    .pipe(gulpHelpers.writePrettierCss())
    .pipe(
      gulpRename(path => {
        path.basename = `${MODULE_NAME}.sanitized`;
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('assets/styles/')));
  if (done) done();
};

/**
 * Compiles sanitized version of SLDS component files
 */
export const writeSanitizedComponentCss = () => {
  return (
    gulp
      .src([
        paths.rootPath('.css/**/index.scss'),
        paths.rootPath('.css/**/touch.scss')
      ])
      .pipe(gulpHelpers.writeScss({ outputStyle: 'expanded' }))
      .pipe(gulpHelpers.writePostCss([discardComments()]))
      // Need to format to ensure proper parsing
      .pipe(gulpHelpers.writePrettierCss())
      .pipe(
        through.obj((file, enc, next) => {
          let newFile = file.clone();
          newFile.contents = Buffer.from(
            file.contents
              .toString()
              .replace(regex[0], '')
              .replace(regex[1], '')
          );
          return next(null, newFile);
        })
      )
      // For cleanup
      .pipe(gulpHelpers.writePrettierCss())
      .pipe(gulp.dest(distPath('css/')))
  );
};

/**
 * Export for gulp task
 * @param {callback} done
 */
export const generateSanitizedScss = done => {
  readLwcAnnotations(components);
  writeSanitizedScssFile(rollup);
  writeSanitizedCssFile(rollup);
  if (done) done();
};
