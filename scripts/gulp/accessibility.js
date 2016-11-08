import gulp from 'gulp';
import axeCore from 'gulp-axe-core';

gulp.task('a11y', ['generate:examples:wrap'], () => {
  const options = {
    folderOutputReport: '.reports',
    saveOutputIn: 'a11y.json',
    browser: 'phantomjs'
  };
  return gulp
    .src('.html/*.html')
    .pipe(axeCore(options));
});
