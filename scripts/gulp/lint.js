// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license


import gulp from 'gulp';
import cache from 'gulp-cached';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import lintspaces from 'gulp-lintspaces';
import eslint from 'gulp-eslint';
import stylelint from 'gulp-stylelint';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import htmlhint from 'gulp-htmlhint';
import tokenlint from './plugins/lint-tokens';
import yamlValidate from 'gulp-yaml-validate';
import vnu from './vnu-lint';
import {validate} from './validate';
import minimist from 'minimist';
import through from 'through2';


gulp.task('lint:sass', () =>
  gulp.src([
    'site/assets/styles/**/*.scss',
    'ui/**/*.scss'
  ])
  .pipe(cache('stylelint'))
  .pipe(stylelint({
    reporters: [
      {
        formatter: 'string',
        console: true
      }
    ]
  }))
);

gulp.task('lint:spaces', () =>
  gulp.src([
    '*.{js,json,md,yml,txt}',
    '.*',
    '!.DS_Store',
    '!LICENSE-icons-images.txt',
    '!CONTRIBUTING.md',
    'ui/**/*.*',
    'site/**/*.{js,jsx,sh,scss,yml,md,xml}',
    'scripts/**/*.{js,sh,jsx}'
  ])
  .pipe(cache('lintspaces'))
  .pipe(lintspaces({
    editorconfig: '.editorconfig',
    ignores: [
      /\/\*[\s\S]*?\*\//g // Ignore comments
    ]
  }))
  .pipe(lintspaces.reporter())
);

function lintjs(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(cache('lintjs'))
      .pipe(eslint(options))
      .pipe(eslint.format('codeframe'))
      .pipe(gulpif(!browserSync.active, eslint.failAfterError()));
  };
}

gulp.task('lint:js', lintjs([
  '*.js',
  'app_modules/**/*.{js,jsx}',
  'scripts/**/*.{js,jsx}',
  'site/**/*.{js,jsx}',
  'ui/**/*.{js,jsx}',
  '!**/*.spec.{js,jsx}'
]));

gulp.task('lint:js:test', lintjs([
  'test/**/*.{js,jsx}',
  '**/*.spec.{js,jsx}'],
  {env: {mocha: true}}
));

// This task lints pre-built assets (not the JSX templates),
// So you typically have to run `npm run build` before linting HTML files.
gulp.task('lint:html', ['generate:wrappedexamples'], () => {
  return gulp.src('.html/*.html')
    .pipe(htmlhint({
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
    }))
    .pipe(htmlhint.reporter());
});

gulp.task('lint:tokens:yaml', () =>
  gulp.src([
    './ui/components/**/tokens/*.yml',
    './design-tokens/aliases/*.yml'
  ])
    .pipe(yamlValidate())
);

gulp.task('lint:tokens:components', () =>
  gulp.src([
    './ui/components/**/tokens/*.yml',
    '!./ui/components/**/tokens/bg-*.yml', // icons
    '!./ui/components/**/tokens/force-font-commons.yml' // fonts
  ])
    .pipe(tokenlint())
    .pipe(tokenlint.report('verbose'))
);

gulp.task('lint:tokens:aliases', () =>
  gulp.src([
    './design-tokens/aliases/*.yml'
  ])
    .pipe(tokenlint({ prefix: false }))
    .pipe(tokenlint.report('verbose'))
);

gulp.task('lint:tokens', ['lint:tokens:yaml', 'lint:tokens:components', 'lint:tokens:aliases']);

gulp.task('lint', ['lint:sass', 'lint:spaces', 'lint:js', 'lint:html', 'lint:tokens']);

const parseComponentArgument = argv =>
  minimist(argv.slice(2)).component || '*';

const createVnuReport = stream =>
  vnu.lint(`.html/${parseComponentArgument(process.argv)}`, {}, (err, stdout, stderr) => {
    const contents = JSON.stringify(vnu.report(stderr), null, 2);
    stream.write(
      new gutil.File({
        path: 'vnu_report.json',
        contents: new Buffer(contents)
      }));
  });

// gulp lint:vnu
// gulp lint:vnu --component data-tabl*
gulp.task('lint:vnu', ['generate:wrappedexamples'], () => {
  const stream = through.obj();
  createVnuReport(stream);
  return stream.pipe(gulp.dest('.reports/'));
});

gulp.task('lint:validate', ['generate:wrappedexamples'], () =>
  validate().fork(console.error, x => x));
