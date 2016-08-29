import gulp from 'gulp';
import axeCore from 'gulp-axe-core';

gulp.task('a11y', () => {
  const options = {
      folderOutputReport: '.reports',
      saveOutputIn: 'a11y.json',
      browser: 'phantomjs'
    };
    return gulp
      .src('.generated/**/*.html')
      .pipe(axeCore(options));
});
