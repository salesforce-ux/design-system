// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const { spawn, fork } = require('child_process');
const path = require('path');

const jest = spawn(
  './node_modules/.bin/jest',
  process.argv.slice(2).filter(a => a !== '-u'),
  {
    cwd: path.resolve(__dirname),
    stdio: 'inherit'
  }
);

if (process.argv.includes('--watch')) {
  const glob = require('glob');
  const gulp = require('gulp');
  const touch = require('touch');
  const paths = require('./scripts/helpers/paths');
  const { watchPaths } = require('./scripts/watch');
  require('./scripts/gulp/styles');
  gulp.watch(watchPaths.sass, changeEvent => {
    console.log(`${changeEvent.path}`);
    console.log(`Compiling Sass...`);
    gulp.start('styles:sass', err => {
      if (err) return console.log(err);
      const pattern = /ui\/(.+?)\/(.+?)\//;
      const match = changeEvent.path.match(pattern);
      if (match) {
        const [type, id] = match.slice(1);
        glob
          .sync(path.resolve(__dirname, `ui/${type}/${id}/**/*.spec.{js,jsx}`))
          .slice(0, 1)
          .map(p => touch.sync(p));
      }
    });
  });
}
