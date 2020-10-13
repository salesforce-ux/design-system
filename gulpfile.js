// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import del from 'del';
import glob from 'glob';
import gulp from 'gulp';
import path from 'path';
import touch from 'touch';
import { argv } from 'yargs';

import * as accessibility from './scripts/gulp/accessibility';
import * as dist from './scripts/gulp/dist';
import * as examples from './scripts/gulp/generate/examples';
import * as tokens from './scripts/gulp/generate/tokens';
import * as lint from './scripts/gulp/lint';
import * as styles from './scripts/gulp/styles';
import * as sanitized from './scripts/gulp/generate/sanitized';
import { generateUIJson } from './scripts/generate-ui';

import paths from './scripts/helpers/paths';
import * as travis from './scripts/helpers/travis';

const getComponents = key => {
  if (!argv.components) return ['.html/*.html'];
  const components = String(argv.components).split(',');
  if (!components.length) return components;
  return components.map(comp => `.html/${comp}*.html`);
};

/*
 * ==================
 * Gulp
 * ==================
 */

const withName = name => fn => {
  const f = (...args) => fn(...args);
  f.displayName = name;
  return f;
};

/*
 * ==================
 * Clean
 * ==================
 */

gulp.task('clean', () =>
  del([
    paths.generated,
    paths.tmp,
    paths.logs,
    paths.build,
    paths.html,
    paths.css,
    path.join(paths.designTokens, 'dist')
  ])
);

/*
 * ==================
 * Examples
 * ==================
 */

gulp.task(
  'generate:examples:wrapped',
  gulp.series(
    withName('examples:unwrapped')(examples.unwrapped),
    withName('examples:unwrapped:docs')(examples.unwrappedDocs),
    withName('examples:wrapped')(examples.wrapped)
  )
);

/*
 * ==================
 * Tokens
 * ==================
 */

// Generate Primitive Aliases from npm package - @salesforce-ux/design-system-primitive-tokens
gulp.task(
  'generate:tokens:primitive:aliases',
  tokens.copyDesignPrimitiveAliases
);

// Generate Primitive Tokens from npm package - @salesforce-ux/design-system-primitive-tokens
gulp.task('generate:tokens:primitive', tokens.copyDesignPrimitiveTokens);

// Generate component specific tokens
gulp.task('generate:tokens:components:imports', tokens.componentsImports);

// Generate package specific tokens
gulp.task('generate:tokens:package', tokens.packages);

// Generate all tokens - [Primitive, Component Specific, Package]
gulp.task(
  'generate:tokens:all',
  gulp.series(
    withName('generate:tokens:primitive:aliases')(
      tokens.copyDesignPrimitiveAliases
    ),
    withName('generate:tokens:primitive')(tokens.copyDesignPrimitiveTokens),
    withName('generate:tokens:components:imports')(tokens.componentsImports),
    withName('generate:tokens:package')(tokens.packages)
  )
);

gulp.task('generate:auraTokensMap', done => {
  dist.writeAuraTokensMap().fork(e => done(e), () => done());
});

gulp.task('generate:tokenComponentMap', done => {
  dist.writeTokenComponentMap().fork(e => done(e), () => done());
});

gulp.task('generate:utilityDeclarationsMap', done => {
  dist.writeUtilityDeclarationsMap().fork(e => done(e), () => done());
});

/*
 * ==================
 * Lint
 * ==================
 */

const a11y = withName('a11y')(() => accessibility.axe(getComponents()));

const vnu = withName('vnu')(() => accessibility.vnu(getComponents()));

// npm run gulp -- lint:a11y
// npm run gulp -- lint:a11y --components path
// npm run gulp -- lint:a11y --components path,tabs,data-tables
gulp.task('lint:a11y', gulp.series('generate:examples:wrapped', a11y));

// npm run gulp -- lint:vnu
// npm run gulp -- lint:vnu --components path
// npm run gulp -- lint:vnu --components path,tabs,data-tables
gulp.task('lint:vnu', gulp.series('generate:examples:wrapped', vnu));

gulp.task('lint:sass', lint.sass);
gulp.task('lint:spaces', lint.spaces);
gulp.task('lint:javascript', lint.javascript);
gulp.task('lint:javascript:test', lint.javascriptTest);
gulp.task('lint:html', lint.html);
gulp.task('lint:markup', lint.markup);
gulp.task('lint:tokens:yml', lint.tokensYml);
gulp.task('lint:tokens:components', lint.tokensComponents);
gulp.task('lint:tokens:aliases', lint.tokensAliases);

gulp.task(
  'lint:tokens',
  gulp.parallel(
    withName('lint:tokens:yml')(lint.tokensYml),
    withName('lint:tokens:components')(lint.tokensComponents),
    withName('lint:tokens:aliases')(lint.tokensAliases)
  )
);

gulp.task(
  'lint:examples',
  gulp.series(
    'generate:examples:wrapped',
    gulp.parallel(
      vnu,
      a11y,
      withName('lint:markup')(lint.markup),
      withName('lint:html')(lint.html)
    )
  )
);

gulp.task(
  'lint:restrictions',
  gulp.series('generate:examples:wrapped', withName('lint:markup')(lint.markup))
);

gulp.task(
  'lint',
  gulp.parallel(
    withName('lint:sass')(lint.sass),
    withName('lint:spaces')(lint.spaces),
    withName('lint:javascript')(lint.javascript),
    withName('lint:javascript:test')(lint.javascriptTest),
    'lint:tokens'
  )
);

/*
 * ==================
 * Styles Sanitized
 * ==================
 */
gulp.task('sanitized:sass', sanitized.generateSanitizedScss);
gulp.task('sanitized:componentSass', sanitized.writeSanitizedComponentCss);

/*
 * ==================
 * Styles
 * ==================
 */

gulp.task('styles:sass', styles.sass);
gulp.task('styles:sassTouch', styles.sassTouch);
gulp.task('styles:sassTouchDemo', styles.sassTouchDemo);
gulp.task('styles:formFactors', styles.sassFormFactors);
gulp.task('styles:componentCSS', styles.componentCSS);
gulp.task('styles:extractStyleHooks', styles.extractStyleHooks);
gulp.task('styles:test', styles.sassTest);
gulp.task(
  'styles',
  gulp.series(
    'styles:sass',
    'styles:sassTouch',
    'styles:sassTouchDemo',
    'styles:formFactors',
    'styles:componentCSS',
    'styles:extractStyleHooks',
    'styles:test'
  )
);
gulp.task(
  'styles:stats',
  gulp.series('styles', withName('styles:stats')(styles.stats))
);

/*
 * ==================
 * Storybook
 * ==================
 */
gulp.task('storybook:prepare:ui', done => {
  generateUIJson({ suppressOutput: true, callback: done });
});
gulp.task(
  'storybook:prepare',
  gulp.series('storybook:prepare:ui', 'styles:extractStyleHooks')
);

/*
 * ==================
 * Builds
 * ==================
 */

gulp.task('build', gulp.series('clean', 'generate:tokens:all', 'styles'));

/*
 * ==================
 * Write UI.json
 * ==================
 */

gulp.task(
  'dist:ui-json',
  gulp.series(
    'generate:tokens:all',
    withName('dist:clean:before')(dist.cleanBefore),
    withName('dist:writeUI')(dist.writeUI),
    withName('dist:clean:after')(dist.cleanAfter)
  )
);

/*
 * ==================
 * Tests
 * ==================
 */

export const watch = () =>
  gulp.watch(paths.watch.sass).on('change', changedPath => {
    console.log(changedPath);
    console.log(`Compiling Sass...`);
    gulp.series('styles:sass')(() => {
      const pattern = /ui\/(.+?)\/(.+?)\//;
      const match = changedPath.match(pattern);
      if (match) {
        const [type, id] = match.slice(1);
        glob
          .sync(path.resolve(paths.ui, `${type}/${id}/**/*.spec.{js,jsx}`))
          .slice(0, 1)
          .map(p => touch.sync(p));
      }
    });
  });

/*
 * ==================
 * Dist
 * ==================
 */

// Framework
gulp.task('dist:sass:framework', dist.sass);
gulp.task('dist:sass:frameworkTouch', dist.sassTouch);
gulp.task('dist:sass:frameworkTouchDemo', dist.sassTouchDemo);

// Components
gulp.task('dist:sass:components:generate', dist.generateComponentSass);
gulp.task('dist:sass:components:common', dist.writeCommon);

gulp.task(
  'dist:sass',
  gulp.series(
    'dist:sass:framework',
    'dist:sass:frameworkTouch',
    'dist:sass:frameworkTouchDemo',
    'dist:sass:components:generate',
    'dist:sass:components:common'
  )
);

// Sanitize Framework
gulp.task('dist:sass:sanitized:generate', dist.generateSanitized);
gulp.task('dist:sass:sanitized:write', dist.writeSanitized);
gulp.task('dist:sass:sanitized:components', dist.writeSanitizedComponents);

gulp.task(
  'dist:sass:sanitized',
  gulp.parallel(
    'dist:sass:sanitized:generate',
    'dist:sass:sanitized:write',
    'dist:sass:sanitized:components'
  )
);

gulp.task(
  'dist',
  gulp.series(
    withName('dist:clean:before')(dist.cleanBefore),
    gulp.parallel(
      withName('dist:copyRoot')(dist.copyRoot),
      withName('dist:copySass')(dist.copySass),
      withName('dist:copySassLicense')(dist.copySassLicense),
      withName('dist:copyIcons')(dist.copyIcons),
      withName('dist:copyIconsMeta')(dist.copyIconsMeta),
      withName('dist:copyIconsSynonyms')(dist.copyIconsSynonyms),
      withName('dist:copyFonts')(dist.copyFonts),
      withName('dist:copyFontsLicense')(dist.copyFontsLicense),
      withName('dist:copyImages')(dist.copyImages),
      withName('dist:copyImagesLicense')(dist.copyImagesLicense),
      withName('dist:copyComponentReleaseNotes')(
        dist.copyComponentReleaseNotes
      ),
      withName('dist:copyUtilityReleaseNotes')(dist.copyUtilityReleaseNotes),
      withName('dist:copySwatches')(dist.copySwatches),
      withName('dist:copyDesignTokens')(dist.copyDesignTokens),
      withName('dist:copyComponentDesignTokens')(
        dist.copyComponentDesignTokens
      ),
      withName('dist:copyStylingHooksMetadata')(dist.copyStylingHooksMetadata)
    ),
    'dist:sass',
    'dist:sass:sanitized',
    gulp.parallel(
      withName('dist:versionBlock')(dist.versionBlock),
      withName('dist:versionInline')(dist.versionInline),
      withName('dist:buildInfo')(dist.buildInfo),
      withName('dist:packageJson')(dist.packageJson)
    ),
    withName('dist:minifyCss')(dist.minifyCss),
    withName('dist:writeUI')(dist.writeUI),
    withName('dist:writeLibrary')(dist.writeLibrary),
    withName('dist:writeTokenComponentMap')(done =>
      dist.writeTokenComponentMap().fork(done, () => done())
    ),
    withName('dist:writeAuraTokensMap')(done =>
      dist.writeAuraTokensMap().fork(done, () => done())
    ),
    withName('dist:writeUtilityDeclarationsMap')(done =>
      dist.writeUtilityDeclarationsMap().fork(done, () => done())
    ),
    withName('dist:clean:after')(dist.cleanAfter)
  )
);

gulp.task(
  'dist:write-ui',
  gulp.series(
    withName('dist:writeUI')(dist.writeUI)
    // withName('dist:writeLibrary')(dist.writeLibrary)
  )
);

gulp.task(
  'dist:simple',
  gulp.series(
    withName('dist:clean:before')(dist.cleanBefore),
    gulp.parallel(
      withName('dist:copyRoot')(dist.copyRoot),
      withName('dist:copySass')(dist.copySass),
      withName('dist:copySassLicense')(dist.copySassLicense),
      withName('dist:copyIcons')(dist.copyIcons),
      withName('dist:copyIconsMeta')(dist.copyIconsMeta),
      withName('dist:copyFonts')(dist.copyFonts),
      withName('dist:copyFontsLicense')(dist.copyFontsLicense),
      withName('dist:copyImages')(dist.copyImages),
      withName('dist:copyImagesLicense')(dist.copyImagesLicense),
      withName('dist:copyComponentReleaseNotes')(
        dist.copyComponentReleaseNotes
      ),
      withName('dist:copyUtilityReleaseNotes')(dist.copyUtilityReleaseNotes),
      withName('dist:copySwatches')(dist.copySwatches),
      withName('dist:copyDesignTokens')(dist.copyDesignTokens),
      withName('dist:copyComponentDesignTokens')(dist.copyComponentDesignTokens)
    ),
    'dist:sass',
    'dist:sass:sanitized',
    gulp.parallel(
      withName('dist:versionBlock')(dist.versionBlock),
      withName('dist:versionInline')(dist.versionInline),
      withName('dist:buildInfo')(dist.buildInfo),
      withName('dist:packageJson')(dist.packageJson)
    ),
    withName('dist:minifyCss')(dist.minifyCss),
    withName('dist:writeTokenComponentMap')(done =>
      dist.writeTokenComponentMap().fork(done, () => done())
    ),
    withName('dist:writeAuraTokensMap')(done =>
      dist.writeAuraTokensMap().fork(done, () => done())
    ),
    withName('dist:writeUtilityDeclarationsMap')(done =>
      dist.writeUtilityDeclarationsMap().fork(done, () => done())
    ),
    withName('dist:clean:after')(dist.cleanAfter)
  )
);

/*
 * ==================
 * Travis
 * ==================
 */

gulp.task('travis', done => {
  if (!travis.shouldPushToBuildServer()) return done();
  return gulp.series(
    'build',
    'lint',
    withName('travis:jest')(travis.jest),
    'generate:examples:wrapped',
    withName('travis:snapshots')(travis.createSnapshots),
    withName('travis:lint:examples')(travis.lintExamples),
    'dist',
    withName('travis:publish')(travis.publishBuild)
  )(done);
});

gulp.task(
  'travis:lint:examples',
  gulp.parallel(
    vnu,
    a11y,
    withName('lint:markup')(lint.markup),
    withName('lint:html')(lint.html)
  )
);

gulp.task(
  'pr-checks',
  gulp.series(
    'build',
    'lint',
    withName('travis:jest')(travis.jest),
    'generate:examples:wrapped',
    'lint:examples'
  )
);
