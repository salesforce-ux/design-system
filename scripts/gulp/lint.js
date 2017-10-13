// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const cache = require('gulp-cached');
const gutil = require('gulp-util');
const lintspaces = require('gulp-lintspaces');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const htmlhint = require('gulp-htmlhint');
const tokenlint = require('./plugins/lint-tokens');
const yamlValidate = require('gulp-yaml-validate');
const { validate } = require('./validate');
const vnu = require('./vnu');

gulp.task('lint:sass', () =>
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
    )
);

gulp.task('lint:spaces', () =>
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
    .pipe(lintspaces.reporter({ breakOnWarning: true }))
);

function lintjs(files, options) {
  return () => {
    return gulp
      .src(files)
      .pipe(cache('lintjs'))
      .pipe(eslint(options))
      .pipe(eslint.format('codeframe'))
      .pipe(eslint.failAfterError());
  };
}

gulp.task(
  'lint:js',
  lintjs([
    '*.js',
    'shared/**/*.{js,jsx}',
    'site/**/*.{js,jsx}',
    'ui/**/*.{js,jsx}',
    '!**/*.spec.{js,jsx}'
  ])
);

gulp.task(
  'lint:js:test',
  lintjs(['test/**/*.{js,jsx}', '**/*.spec.{js,jsx}'], { env: { mocha: true } })
);

// This task lints pre-built assets (not the JSX templates),
// So you typically have to run `npm run build` before linting HTML files.
gulp.task('lint:html', ['generate:wrappedexamples'], () => {
  return gulp
    .src('.html/*.html')
    .pipe(
      htmlhint({
        // Rules documentation:
        // https://github.com/yaniswang/HTMLHint/wiki/Rules
        'alt-require': true,
        'attr-lowercase': ['viewBox', 'preserveAspectRatio'],
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
        'tagname-lowercase': true,
        'title-require': true,
        // TODO: enable when https://github.com/yaniswang/HTMLHint/issues/139 is fixed
        // as <div>&lt;div></div> raises errors at the moment
        'spec-char-escape': false
      })
    )
    .pipe(htmlhint.failReporter());
});

gulp.task('lint:tokens:yaml', () =>
  gulp
    .src(['./ui/components/**/tokens/*.yml', './design-tokens/aliases/*.yml'])
    .pipe(yamlValidate())
);

gulp.task('lint:tokens:components', () =>
  gulp
    .src([
      './ui/components/**/tokens/*.yml',
      '!./ui/components/**/tokens/bg-*.yml', // icons
      '!./ui/components/**/tokens/force-font-commons.yml' // fonts
    ])
    .pipe(tokenlint())
    .pipe(tokenlint.report('verbose'))
);

gulp.task('lint:tokens:aliases', () =>
  gulp
    .src(['./design-tokens/aliases/*.yml'])
    .pipe(tokenlint({ prefix: false }))
    .pipe(tokenlint.report('verbose'))
);

gulp.task('lint:tokens', [
  'lint:tokens:yaml',
  'lint:tokens:components',
  'lint:tokens:aliases'
]);

gulp.task('lint', [
  'lint:sass',
  'lint:spaces',
  'lint:js',
  'lint:js:test',
  'lint:html',
  'lint:tokens'
]);

gulp.task('lint:examples', ['lint:vnu', 'lint:validate', 'a11y']);

gulp.task('lint:validate', ['generate:wrappedexamples'], () =>
  validate().fork(console.error, x => x)
);
