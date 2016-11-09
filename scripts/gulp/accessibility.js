import gulp from 'gulp';
import axe from 'gulp-axe-webdriver';

gulp.task('a11y', ['generate:examples:wrap'], (done) => {
  const options = {
    folderOutputReport: '.reports',
    saveOutputIn: 'a11y.json',
    browser: 'phantomjs',
    a11yCheckOptions: {
      'rules': {
        'bypass': { enabled: false }
      }
    },
    urls: ['.html/*.html'],
    showOnlyViolations: true
  };
  return axe(options, done);
});
