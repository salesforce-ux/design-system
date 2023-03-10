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
  `${path.resolve(paths.sldsStylingHooksProps, '*.json')}`
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
