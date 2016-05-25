/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import './setup';
import _ from 'lodash';
import async from 'async';
import cssstats from 'cssstats';
import { exec } from 'child_process';
import fs from 'fs';
import gulp from 'gulp';
import gulpzip from 'gulp-zip';
import path from 'path';
import buildServerApi from '@salesforce-ux/build-server-api';

const { publish } = buildServerApi(process.env.BUILD_SERVER_HOST_NEW);

const packageJSON = require('../../package.json');

const CSS_PATH = 'assets/styles/salesforce-lightning-design-system.css';

const paths = {
  build: path.resolve.bind(path, __PATHS__.build),
  buildDist: path.resolve.bind(path, __PATHS__.build, 'dist')
};

const execute = (cmd, done) =>
  exec(cmd, { cwd: __PATHS__.root, stdio: 'inherit' }, (err, out, stderr) => {
    if (err) return done(err);
    done(null, out.trim());
  });

const getDependencies = (done) => {
  const deps = _.assign({},
    packageJSON.devDependencies, packageJSON.dependencies);
  done(null, _.keys(deps)
      .filter(k => k.match(/@salesforce/i))
      .reduce((acc, k) =>
        _.assign(acc, { [k.split('/')[1]]: deps[k] }), {}));
};

const formatStats = stats => ({
  kbSize: stats.size,
  gzipSize: stats.gzipSize,
  ruleCount: stats.rules.total,
  selectorCount: stats.selectors.total,
  declarationCount: stats.declarations.total
});

const formatTestCounts = out => {
  const matches = out.match(/(\d+)\s+(SUCCESS|passing)/ig);
  if (!matches) return {};
  return {
    unitTests: parseInt(matches[0]),
    integrationTests: parseInt(matches[1]),
    allyTests: parseInt(matches[2])
  };
};

const zip = (src, done) =>
  gulp.src(paths.build(`${src}/**/*`))
  .pipe(gulpzip(`${src}.zip`))
  .on('error', done)
  .pipe(gulp.dest(paths.build()))
  .on('error', done)
  .on('finish', done);

const prepare = (done) => {
  console.log('[BUILD:PREPARE]');
  return async.series([
    // clean
    (done) => async.series([
      async.apply(execute, `rm -rf ${__PATHS__.build}`),
      async.apply(execute, `mkdir ${__PATHS__.build}`)
    ], done),
    // dist
    (done) => async.series([
      async.apply(execute, 'npm run dist-npm'),
      async.apply(execute, `cp -a ${__PATHS__.npm}/. ${__PATHS__.build}/dist`),
      async.apply(execute, `rm -rf ${__PATHS__.build}/dist/*.zip`)
    ], done),
    // examples
    async.apply(execute, `cp -a ${__PATHS__.generated}/examples/. ${__PATHS__.build}/examples`),
    // website
    async.apply(execute, `cp -a ${__PATHS__.www}/. ${__PATHS__.build}/www`),
    // git info
    async.apply(execute, 'git show --format="%an|%ae|%ad|%s" | head -n 1'),
    // stats
    (done) => async.series([
      (done) => {
        let counts = fs.readFileSync(`${__PATHS__.logs}/test.txt`, 'utf-8') || '';
        done(null, formatTestCounts(counts));
      },
      (done) => {
        let css = fs.readFileSync(paths.buildDist(CSS_PATH), 'utf8');
        let stats = cssstats(css);
        done(null, formatStats(stats));
      }
    ], (err, [counts, tests]) => {
      if (err) return done(err);
      done(null, _.assign({}, counts, tests));
    }),
    // SHA
    async.apply(execute, 'git rev-parse HEAD'),
    // Dependencies
    getDependencies,
    // zip
    async.apply(zip, 'dist'),
    async.apply(zip, 'examples'),
    async.apply(zip, 'www')
  ], (err, [_prepare, _dist, _examples, _website, info, stats, sha, dependencies, _zip]) => {
    if (err) return done(err);
    let result = _.assign({}, { sha, info, stats, dependencies }, {
      tag: process.env.TRAVIS_TAG || '',
      pullRequest: process.env.TRAVIS_PULL_REQUEST || '',
      branch: process.env.TRAVIS_BRANCH || '',
      version: packageJSON.version
    });
    done(null, result);
  });
};

module.exports = (done) => prepare((err, result) => {
  if (err) return done(err);
  publish({
    result,
    zips: ['dist.zip', 'examples.zip', 'www.zip']
      .map((p) => paths.build(p)),
    project: 'design-system'
  }, done);
});
