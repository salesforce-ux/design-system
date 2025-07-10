import gulp from 'gulp';
import gulpTheo from 'gulp-theo';
import path from 'path';
import paths from '../../helpers/paths';
import async from 'async';


const sldsStylingHooksFormats = [
  {
    format: 'json',
    transform: 'web',
  },
  {
    format: 'common.js',
    transform: 'web',
  },
  {
    format: 'module.js',
    transform: 'web',
  },
  {
    format: 'custom-props.scss',
    transform: 'raw',
  },
  {
    format: 'raw.json',
    transform: 'raw',
  }
];

const sourcePaths = [
  `${path.resolve(paths.sdsStylingHooksProps, '*.json')}`,
  /**
   * Note: Some of the references included in the path below are related to WCAG.
   * In v2 of the sds-styling-hooks package, some of those files are no longer available.
   * Due to these structural changes, 'colors' and 'palettes' files from v1 are copied over temporarily.
   * Those files can be removed once we merge WCAG with the global hooks.
   * See:
   * - `design-system-internal/scripts/helpers/paths.js`
   * - `design-system-internal/styling-hooks/slds-hooks.json`
   */
  `${path.resolve(paths.sldsStylingHooksProps, '*.json')}`,
];

export const createStylingHooks = (done) => {
  const convert = ({ format, transform }, done) =>
    gulp
      .src(sourcePaths)
      .pipe(
        gulpTheo({
          transform: { type: transform },
          format: { type: format }
        })
      )
      .pipe(gulp.dest(path.resolve(paths.designTokens, 'dist')))
      .on('finish', done);
  async.each(sldsStylingHooksFormats, convert, done);
};
