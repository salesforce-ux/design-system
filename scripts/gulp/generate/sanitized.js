// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import fs from 'fs';
import I from 'immutable';
import path from 'path';
import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import gulpSass from 'gulp-sass';
import gulpPlumber from 'gulp-plumber';
import gulpPostcss from 'gulp-postcss';
import gulpRename from 'gulp-rename';
import through from 'through2';
import { toList } from '@salesforce-ux/design-system-previewer/lib/tree';
import paths from '../../helpers/paths';
import { uiJson } from '../../ui';

const MODULE_NAME = 'salesforce-lightning-design-system';

/**
 * Store paths
 */
const root = path.resolve(__dirname, '../../../');
const rootPath = path.resolve.bind(path, root);
const distPath = path.resolve.bind(path, paths.dist);

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
  const file = rootPath('ui/components/_index-sanitized.scss');
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
  } catch (e) {
    console.log(`Unable to write file`);
  }
};

/**
 * Write sanitized version to assets/styles so it can be copied
 * and minified with dist script runs
 */
export const writeSanitizedCss = done => {
  gulp
    .src('ui/index-sanitized.scss')
    .pipe(gulpPlumber())
    .pipe(
      gulpSass
        .sync({
          outputStyle: 'expanded',
          precision: 3,
          includePaths: [paths.ui, paths.node_modules]
        })
        .on('error', gulpSass.logError)
    )
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulpPostcss([autoprefixer({ remove: false })]))
    .pipe(
      through.obj((file, enc, next) => {
        let newFile = file.clone();
        const regex1 = /(\.\S.*[\S]+.(--)+.*)(\,)+?\B/g;
        const regex2 = /\,[\n\s]*(\.\S.*[\S]+.(--)+.*)\b(\s|\]\))/g;
        newFile.contents = Buffer.from(
          file.contents
            .toString()
            .replace(regex1, '')
            .replace(regex2, '')
        );
        return next(null, newFile);
      })
    )
    .pipe(
      gulpSass.sync({
        outputStyle: 'nested'
      })
    )
    .pipe(
      gulpRename(path => {
        path.basename = MODULE_NAME + path.basename.substring('index'.length);
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('assets/styles/')));
  if (done) done();
};

/**
 * Export for gulp task
 * @param {callback} done
 */
export const generateSanitizedScss = done => {
  readLwcAnnotations(components);
  writeSanitizedScssFile(rollup);
  if (done) done();
};
