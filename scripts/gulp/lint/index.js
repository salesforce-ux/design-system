// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import gulp from 'gulp';
import cache from 'gulp-cached';
import lintspaces from 'gulp-lintspaces';
import eslint from 'gulp-eslint';
import stylelint from 'gulp-stylelint';
import htmlhint from 'gulp-htmlhint';
import yamlValidate from 'gulp-yaml-validate';

import tokenlint from '../plugins/lint-tokens';

import validateMarkup from './validate-markup';

export const sass = () =>
  gulp
    .src(['site/assets/styles/**/*.scss', 'ui/**/*.scss'])
    .pipe(cache('stylelint'))
    .pipe(
      stylelint({
        reporters: [
          {
            formatter: 'string',
            console: true
          }
        ],
        failAfterError: true
      })
    );

export const spaces = () =>
  gulp
    .src([
      '*.{js,json,md,yml,txt}',
      '.*',
      '!.DS_Store',
      '!LICENSE-icons-images.txt',
      '!CONTRIBUTING.md',
      'ui/**/*.*',
      'site/**/*.{js,jsx,sh,scss,yml,md,xml}',
      'scripts/**/*.{js,sh,jsx}',
      '!**/__snapshots__/*'
    ])
    .pipe(cache('lintspaces'))
    .pipe(
      lintspaces({
        editorconfig: '.editorconfig',
        ignores: [
          /\/\*[\s\S]*?\*\//g // Ignore comments
        ]
      })
    )
    .pipe(lintspaces.reporter({ breakOnWarning: true }));

export const javascript = (files, options) =>
  gulp
    .src([
      '*.js',
      'shared/**/*.{js,jsx}',
      'site/**/*.{js,jsx}',
      'ui/**/*.{js,jsx}',
      '!**/*.spec.{js,jsx}'
    ])
    .pipe(cache('lintjs'))
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError());

export const javascriptTest = () =>
  gulp
    .src(['test/**/*.{js,jsx}', '**/*.spec.{js,jsx}'])
    .pipe(cache('lintjs'))
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError());

export const html = () =>
  gulp
    .src('.html/*.html')
    .pipe(
      htmlhint({
        // Rules documentation:
        // https://github.com/yaniswang/HTMLHint/wiki/Rules
        'alt-require': true,
        'attr-lowercase': [
          'viewBox',
          'preserveAspectRatio',
          'filterUnits',
          'gradientTransform',
          'stdDeviation',
          'autoComplete'
        ],
        'attr-no-duplication': true,
        'attr-unsafe-chars': true,
        'attr-value-double-quotes': true,
        'attr-value-not-empty': true,
        'doctype-html5': true,
        'id-class-ad-disabled': true,
        'id-unique': true,
        'inline-script-disabled': false,
        'src-not-empty': true,
        'tag-pair': true,
        'tag-self-close': true,
        'tagname-lowercase': false,
        'title-require': true,
        // TODO: enable when https://github.com/yaniswang/HTMLHint/issues/139 is fixed
        // as <div>&lt;div></div> raises errors at the moment
        'spec-char-escape': false
      })
    )
    .pipe(htmlhint.failReporter());

export const markup = done =>
  validateMarkup().fork(console.error, () => done());

export const tokensYml = () =>
  gulp
    .src(['./ui/components/**/tokens/*.yml', './design-tokens/aliases/*.yml'])
    .pipe(yamlValidate());

export const tokensComponents = () =>
  gulp
    .src([
      './ui/components/**/tokens/*.yml',
      '!./ui/components/**/tokens/bg-*.yml', // icons
      '!./ui/components/**/tokens/force-font-commons.yml' // fonts
    ])
    .pipe(tokenlint())
    .pipe(tokenlint.report('verbose'));

export const tokensAliases = () =>
  gulp
    .src(['./design-tokens/aliases/*.yml'])
    .pipe(tokenlint({ prefix: false }))
    .pipe(tokenlint.report('verbose'));
