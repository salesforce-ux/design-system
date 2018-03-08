// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import autoprefixer from 'autoprefixer';
import del from 'del';
import gulp from 'gulp';
import gulpInsert from 'gulp-insert';
import gulpMinifyCss from 'gulp-minify-css';
import gulpPostcss from 'gulp-postcss';
import gulpRename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import gulpFile from 'gulp-file';
import Immutable from 'immutable';
import path from 'path';

import packageJSON from '../../package.json';

import { createLibrary } from '../compile/bundle';
import paths from '../helpers/paths';
import releaseNotes from './release-notes';
import ui from '../ui';

const distPath = path.resolve.bind(path, paths.dist);

const SLDS_VERSION = packageJSON.version;
const DISPLAY_NAME = 'Lightning Design System';
const MODULE_NAME = 'salesforce-lightning-design-system';

export const cleanBefore = () => del([paths.dist]);
export const cleanAfter = () => del([distPath('README-dist.md')]);

export const copyRoot = () =>
  gulp
    .src(['./package.json', './README-dist.md', './RELEASENOTES*'], {
      base: paths.root
    })
    .pipe(gulp.dest(distPath()));

export const copySass = () =>
  gulp
    .src('**/*.scss', {
      base: paths.ui,
      cwd: paths.ui
    })
    .pipe(gulp.dest(distPath('scss')));

export const copySassLicense = () =>
  gulp
    .src('licenses/License-for-Sass.txt', {
      cwd: paths.assets
    })
    .pipe(gulp.dest(distPath('scss')));

export const copyIcons = () =>
  gulp
    .src(
      '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/**',
      {
        cwd: paths.node_modules
      }
    )
    .pipe(gulp.dest(distPath('assets/icons')));

export const copyIconsMeta = () =>
  gulp
    .src('@salesforce-ux/icons/dist/ui.icons.json', {
      cwd: paths.node_modules
    })
    .pipe(gulp.dest(distPath()));

export const copyFonts = () =>
  gulp
    .src('fonts/**/*', {
      cwd: paths.assets
    })
    .pipe(gulp.dest(distPath('assets/fonts')));

export const copyFontsLicense = () =>
  gulp
    .src('licenses/License-for-font.txt', {
      cwd: paths.assets
    })
    .pipe(gulp.dest(distPath('assets/fonts')));

export const copyImages = () =>
  gulp
    .src('images/**/*', {
      base: 'assets/images',
      cwd: paths.assets
    })
    .pipe(gulp.dest(distPath('assets/images')));

export const copyImagesLicense = () =>
  gulp
    .src('licenses/License-for-images.txt', {
      cwd: paths.assets
    })
    .pipe(gulp.dest(distPath('assets/images')));

export const copySwatches = () =>
  gulp
    .src('downloads/swatches/**', {
      cwd: paths.assets
    })
    .pipe(gulp.dest(distPath('swatches')));

export const copyDesignTokens = () =>
  gulp
    .src('**/*.*', {
      base: `${paths.designTokens}`,
      cwd: `${paths.designTokens}`
    })
    .pipe(gulp.dest(distPath('design-tokens')));

export const copyComponentDesignTokens = () =>
  gulp
    .src('components/**/tokens/**/*.yml', {
      base: path.resolve(paths.ui),
      cwd: path.resolve(paths.ui)
    })
    .pipe(gulp.dest(distPath('ui')));

export const sass = () =>
  gulp
    .src(distPath('scss/index.scss'))
    .pipe(
      gulpSass({
        precision: 10,
        includePaths: [paths.node_modules]
      })
    )
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulpPostcss([autoprefixer({ remove: false })]))
    .pipe(
      gulpRename(path => {
        path.basename = MODULE_NAME + path.basename.substring('index'.length);
        path.extname = '.css';
        return path;
      })
    )
    .pipe(gulp.dest(distPath('assets/styles/')));

export const minifyCss = () =>
  gulp
    .src(distPath('assets/styles/*.css'), { base: distPath() })
    .pipe(gulp.dest(distPath()))
    .pipe(
      gulpMinifyCss({
        advanced: false,
        roundingPrecision: '-1'
      })
    )
    .pipe(
      gulpRename(path => {
        path.basename += '.min';
        return path;
      })
    )
    .pipe(gulp.dest(distPath()));

export const versionBlock = () =>
  gulp
    .src(['**/*.css', 'scss/index*'], {
      base: distPath(),
      cwd: distPath()
    })
    .pipe(gulpInsert.prepend(`/*! ${DISPLAY_NAME} ${SLDS_VERSION} */\n`))
    .pipe(gulp.dest(distPath()));

export const versionInline = () =>
  gulp
    .src(['scss/**/*.scss', '!scss/index*.scss', '!scss/vendor/**/*.*'], {
      base: distPath(),
      cwd: distPath()
    })
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

export const writeUI = done => ui.writeToDist().fork(done, () => done());

export const writeLibrary = done =>
  createLibrary().fork(e => done(e), stats => done(null, stats));

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
    src: true
  }).pipe(gulp.dest(distPath()));
};
