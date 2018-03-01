// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import del from 'del';
import gulp from 'gulp';
import path from 'path';
import runSequence from 'run-sequence';
import yargs from 'yargs';

import * as accessibility from './scripts/gulp/accessibility';
import * as examples from './scripts/gulp/generate/examples';
import * as tokens from './scripts/gulp/generate/tokens';
import * as lint from './scripts/gulp/lint';
import * as styles from './scripts/gulp/styles';

import ui from './scripts/ui';
import paths from './scripts/helpers/paths';

const getComponents = key =>
  yargs.args.components
    ? String(yargs.args.components)
        .split(',')
        .map(comp => `.html/${comp}*.html`)
    : ['.html/*.html'];

// /////////////////////////////////////////////////////////
// Clean
// /////////////////////////////////////////////////////////

gulp.task('clean', () =>
  del.sync([
    paths.generated,
    paths.tmp,
    paths.logs,
    paths.build,
    paths.html,
    path.join(paths.designTokens, 'dist')
  ])
);

// /////////////////////////////////////////////////////////
// Examples
// /////////////////////////////////////////////////////////

gulp.task('generate:examples', examples.unwrapped);
gulp.task('generate:examples:wrapped', ['generate:examples'], examples.wrapped);

// /////////////////////////////////////////////////////////
// Tokens
// /////////////////////////////////////////////////////////

gulp.task('generate:tokens:sass:default', tokens.sassDefault);
gulp.task('generate:tokens:sass:map', tokens.sassMap);
gulp.task('generate:tokens:sass', [
  'generate:tokens:sass:default',
  'generate:tokens:sass:map'
]);
gulp.task('generate:tokens:components:imports', tokens.componentsImports);
gulp.task(
  'generate:tokens:all',
  ['generate:tokens:components:imports'],
  tokens.all
);

// /////////////////////////////////////////////////////////
// UI
// /////////////////////////////////////////////////////////

gulp.task('generate:ui', done => {
  ui.writeToDist().fork(done, result => done(null, result));
});

// /////////////////////////////////////////////////////////
// Lint
// /////////////////////////////////////////////////////////

// gulp a11y
// gulp a11y --components path
// gulp a11y --components path,tabs,data-tables
gulp.task('lint:a11y', ['generate:examples:wrapped'], done => {
  accessibility.axe(getComponents(), done);
});

// gulp lint:vnu
// gulp lint:vnu --components path
// gulp lint:vnu --components path,tabs,data-tables
gulp.task('lint:vnu', ['generate:examples:wrapped'], () =>
  accessibility.vnu(getComponents())
);

gulp.task('lint:sass', lint.sass);
gulp.task('lint:spaces', lint.spaces);
gulp.task('lint:javascript', lint.javascript);
gulp.task('lint:javascript:test', lint.javascriptTest);
gulp.task('lint:html', lint.html);
gulp.task('lint:markup', ['generate:examples:wrapped'], lint.markup);

gulp.task('lint:tokens:yml', lint.tokensYml);
gulp.task('lint:tokens:components', lint.tokensComponents);
gulp.task('lint:tokens:aliases', lint.tokensAliases);
gulp.task('lint:tokens', [
  'lint:tokens:yaml',
  'lint:tokens:components',
  'lint:tokens:aliases'
]);

gulp.task('lint:examples', ['lint:vnu', 'lint:markup', 'lint:a11y']);
gulp.task('lint', [
  'lint:sass',
  'lint:spaces',
  'lint:javascript',
  'lint:javascript:test',
  'lint:html',
  'lint:tokens',
  'lint:examples'
]);

// /////////////////////////////////////////////////////////
// Styles
// /////////////////////////////////////////////////////////

gulp.task('styles:sass', styles.sass);
gulp.task('styles:test', styles.sassTest);
gulp.task('styles:stats', ['styles'], styles.stylestats);
gulp.task('styles', ['generate:tokens:sass'], done => {
  runSequence(['styles:sass', 'styles:test'], 'styles:stats', done);
});

// /////////////////////////////////////////////////////////
// Build
// /////////////////////////////////////////////////////////

gulp.task('build', done => {
  runSequence('clean', ['generate:tokens:all'], 'styles', done);
});
