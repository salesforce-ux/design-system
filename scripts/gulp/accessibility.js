import gulp from 'gulp';
import axeCore from 'gulp-axe-core';

gulp.task('accessibility', () => {
  const options = {
      saveOutputIn: 'allHtml.json',
      browser: 'phantomjs'
    };
    return gulp
      .src('.generated/**/*.html')
      .pipe(axeCore(options));
});
