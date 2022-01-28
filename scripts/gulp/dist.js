// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import del from 'del';
import gulp from 'gulp';
import gulpInsert from 'gulp-insert';
import gulpRename from 'gulp-rename';
import gulpFile from 'gulp-file';
import through from 'through2';
import Immutable from 'immutable';
import path from 'path';
import discardComments from 'postcss-discard-comments';
import combineMediaQuery from 'postcss-combine-media-query';
import annotationsParser from '@salesforce-ux/postcss-annotations-parser';
import cssVariableValue from '@salesforce-ux/postcss-css-variable-value';
import convertDataUri from './plugins/data-uri';

import packageJSON from '../../package.json';

import {
  createAuraTokensMap,
  createTokenComponentMap,
  createUtilityPropertiesMap,
} from '../compile/token-maps';
import { createLibrary } from '../compile/bundle';
import paths from '../helpers/paths';
import * as gulpHelpers from '../helpers/gulp';
import ui from '../ui';
import {
  generateSanitizedScss,
  writeSanitizedCss,
  writeSanitizedComponentCss,
  writeCommonCss,
} from './generate/sanitized';

const distPath = path.resolve.bind(path, paths.dist);

const SLDS_VERSION = packageJSON.version;
const DISPLAY_NAME = 'Lightning Design System';
const MODULE_NAME = 'salesforce-lightning-design-system';
const MODULE_NAME_TOUCH = 'salesforce-lightning-design-system_touch';
const MODULE_NAME_TOUCH_DEMO = 'salesforce-lightning-design-system_touch-demo';
const MODULE_NAME_LEGACY = 'salesforce-lightning-design-system-legacy';

export const cleanBefore = () => del([paths.dist, paths.css]);
export const cleanAfter = () => del([distPath('README-dist.md')]);

export const copyRoot = () =>
  gulp
    .src(['./package.json', './README-dist.md', './RELEASENOTES*'], {
      base: paths.root,
    })
    .pipe(gulp.dest(distPath()));

export const copySass = () =>
  gulp
    .src('**/*.scss', {
      base: paths.ui,
      cwd: paths.ui,
    })
    .pipe(gulp.dest(distPath('scss')));

export const copySassLicense = () =>
  gulp
    .src('licenses/License-for-Sass.txt', {
      cwd: paths.assets,
    })
    .pipe(gulp.dest(distPath('scss')));

export const copyIcons = () =>
  gulp
    .src(
      '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/**',
      {
        cwd: paths.node_modules,
      }
    )
    .pipe(gulp.dest(distPath('assets/icons')));

export const copyIconsMeta = () =>
  gulp
    .src('@salesforce-ux/icons/dist/ui.icons.json', {
      cwd: paths.node_modules,
    })
    .pipe(gulp.dest(distPath()));

export const copyIconsSynonyms = () =>
  gulp
    .src('@salesforce-ux/icons/dist/*-icons-metadata.json', {
      cwd: paths.node_modules,
    })
    .pipe(gulp.dest(distPath('metadata/icons')));

export const copyImages = () =>
  gulp
    .src('images/**/*', {
      base: 'assets/images',
      cwd: paths.assets,
    })
    .pipe(gulp.dest(distPath('assets/images')));

export const copyImagesLicense = () =>
  gulp
    .src('licenses/License-for-images.txt', {
      cwd: paths.assets,
    })
    .pipe(gulp.dest(distPath('assets/images')));

export const copySwatches = () =>
  gulp
    .src('downloads/swatches/**', {
      cwd: paths.assets,
    })
    .pipe(gulp.dest(distPath('swatches')));

export const copyDesignTokens = () =>
  gulp
    .src('**/*.*', {
      base: `${paths.designTokens}`,
      cwd: `${paths.designTokens}`,
    })
    .pipe(gulp.dest(distPath('design-tokens')));

export const copyComponentDesignTokens = () =>
  gulp
    .src('components/**/tokens/**/*.yml', {
      base: path.resolve(paths.ui),
      cwd: path.resolve(paths.ui),
    })
    .pipe(gulp.dest(distPath('ui')));

export const copyComponentReleaseNotes = () =>
  gulp
    .src('components/**/RELEASENOTES.md', {
      base: path.resolve(paths.ui),
      cwd: path.resolve(paths.ui),
    })
    .pipe(gulp.dest(distPath('__internal/release-notes')));

export const copyUtilityReleaseNotes = () =>
  gulp
    .src('utilities/**/RELEASENOTES.md', {
      base: path.resolve(paths.ui),
      cwd: path.resolve(paths.ui),
    })
    .pipe(gulp.dest(distPath('__internal/release-notes')));

export const copyStylingHooksMetadata = () =>
  gulp
    .src('metadata/**', {
      base: path.resolve(paths.generated),
      cwd: path.resolve(paths.generated),
    })
    .pipe(gulp.dest(distPath()));

/*
 * ==================
 * Compiles monolithic version of SLDS
 * ==================
 */

export const sass = () =>
  gulp
    .src([distPath('scss/index.scss')])
    .pipe(gulpHelpers.writeScss({ outputStyle: 'expanded' }))
    .pipe(gulpHelpers.writePostCss([discardComments()]))
    .pipe(
      gulpRename((path) => {
        path.basename = MODULE_NAME;
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('assets/styles/')));

export const sassTouch = () =>
  gulp
    .src([distPath('scss/touch.scss')])
    .pipe(gulpHelpers.writeScss({ outputStyle: 'expanded' }))
    .pipe(gulpHelpers.writePostCss([discardComments(), combineMediaQuery]))
    .pipe(
      gulpRename((path) => {
        path.basename = MODULE_NAME_TOUCH;
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('assets/styles/')));

export const sassTouchDemo = () =>
  gulp
    .src([distPath('scss/touch-demo.scss')])
    .pipe(gulpHelpers.writeScss({ outputStyle: 'expanded' }))
    .pipe(gulpHelpers.writePostCss([discardComments()]))
    .pipe(
      gulpRename((path) => {
        path.basename = MODULE_NAME_TOUCH_DEMO;
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('__internal/styles/')));

export const cssLegacy = () =>
  gulp
    .src([distPath('scss/legacy.scss')])
    .pipe(gulpHelpers.writeScss({ outputStyle: 'expanded' }))
    .pipe(
      gulpHelpers.writePostCss([
        annotationsParser({ preserve: false }),
        cssVariableValue({ preserve: false }),
        discardComments(),
      ])
    )
    .pipe(
      gulpRename((path) => {
        path.basename = MODULE_NAME_LEGACY;
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('assets/styles/')));

export const cssOffline = () =>
  gulp
    .src([distPath('scss/index.scss')])
    .pipe(gulpHelpers.writeScss({ outputStyle: 'expanded' }))
    .pipe(gulpHelpers.writePostCss([discardComments(), convertDataUri()]))
    .pipe(
      gulpRename((path) => {
        path.basename = `${MODULE_NAME}-offline`;
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('assets/styles/')));

/*
 * ==================
 * Compiles tmp SCSS files for every component
 * ==================
 */

// Outputs to `.css` directory
export const generateComponentSass = () =>
  gulp
    .src([
      distPath('scss/components/*/*/_index.scss'),
      distPath('scss/components/*/*/_touch.scss'),
    ])
    // Write message to the top of each module file
    .pipe(
      through.obj((file, enc, next) => {
        let newFile = file.clone();
        newFile.contents = Buffer.from(
          gulpHelpers.writeAutoGenerationWarning(file.contents.toString())
        );
        return next(null, newFile);
      })
    )
    // Rename file with removed underscore("_") so gulp sass will compile
    // since it won't compile underscore("_") due to it being private
    .pipe(
      gulpRename((path) => {
        // mixins aren't public files so we should not rename them to be
        if (!path.dirname.match(/\/mixins/)) {
          path.basename = path.basename.substring(1);
          path.extname = '.scss';
          return path;
        }
      })
    )
    .pipe(gulp.dest(paths.rootPath('.css/')));

/*
 * ==================
 * Compiles tmp files based on metadata, prepping for sanitization
 * ==================
 */

export const generateSanitized = (done) => generateSanitizedScss(done);

/*
 * ==================
 * Compiles sanitized version of SLDS based on tmp file
 * ==================
 */

export const writeSanitized = (done) => writeSanitizedCss(done);

/*
 * ==================
 * Compiles sanitized version of SLDS component files
 * ==================
 */

export const writeSanitizedComponents = (done) =>
  writeSanitizedComponentCss(done);

/*
 * ==================
 * Compiles sanitized common/reset file
 * ==================
 */

export const writeCommon = (done) => writeCommonCss(done);

/*
 * ==================
 * Minify
 * ==================
 */

export const minifyCss = () =>
  gulp
    .src(
      [
        distPath(`assets/styles/${MODULE_NAME}.css`),
        distPath(`assets/styles/${MODULE_NAME_TOUCH}.css`),
        distPath(`__internal/styles/${MODULE_NAME_TOUCH_DEMO}.css`),
        distPath(`assets/styles/${MODULE_NAME_LEGACY}.css`),
        distPath(`assets/styles/${MODULE_NAME}-offline.css`),
      ],
      { base: distPath() }
    )
    .pipe(gulp.dest(distPath()))
    .pipe(gulpHelpers.writeMinifyCss())
    .pipe(
      gulpRename((path) => {
        path.basename += '.min';
        return path;
      })
    )
    .pipe(gulp.dest(distPath()));

export const versionBlock = () =>
  gulp
    .src(['**/*.css', 'scss/index*', 'scss/touch*', 'scss/legacy*'], {
      base: distPath(),
      cwd: distPath(),
    })
    .pipe(gulpInsert.prepend(`/*! ${DISPLAY_NAME} ${SLDS_VERSION} */\n`))
    .pipe(gulp.dest(distPath()));

export const versionInline = () =>
  gulp
    .src(
      [
        'scss/**/*.scss',
        '!scss/index*.scss',
        '!scss/vendor/**/*.*',
        '!scss/touch*',
      ],
      {
        base: distPath(),
        cwd: distPath(),
      }
    )
    .pipe(gulpInsert.prepend(`// ${DISPLAY_NAME} ${SLDS_VERSION}\n`))
    .pipe(gulp.dest(distPath()));

export const buildInfo = () =>
  gulp
    .src(distPath('README-dist.md'))
    .pipe(gulpRename('README.md'))
    .pipe(
      gulpInsert.prepend(`# ${DISPLAY_NAME} \n# Version: ${SLDS_VERSION} \n`)
    )
    .pipe(gulp.dest(distPath()));

export const writeUI = (done) => ui.writeToDist().fork(done, () => done());

export const writeLibrary = (done) =>
  createLibrary().fork(
    (e) => done(e),
    (stats) => done(null, stats)
  );

export const writeAuraTokensMap = (done) => createAuraTokensMap();

export const writeTokenComponentMap = (done) => createTokenComponentMap();

export const writeUtilityDeclarationsMap = (done) =>
  createUtilityPropertiesMap();

export const packageJson = () => {
  const a = Immutable.fromJS(packageJSON);
  const b = a
    .set('name', '@salesforce-ux/design-system')
    .setIn(
      ['slds', 'dependencies'],
      a.get('devDependencies').filter((v, k) => /^@salesforce-ux/.test(k))
    )
    .delete('scripts')
    .delete('dependencies')
    .delete('devDependencies')
    .delete('optionalDependencies')
    .delete('engines')
    .delete('important');
  return gulpFile('package.json', JSON.stringify(b, null, 2), {
    src: true,
  }).pipe(gulp.dest(distPath()));
};

export const searchConfig = () =>
  gulp.src('searchconfig.json').pipe(gulp.dest(distPath()));
