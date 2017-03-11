// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

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

const hasError = x =>
  Object.keys(x).some(k => Object.keys(x[k]).includes('error'));

const formatVnuCount = report =>
({
  htmlErrors: Object.keys(report).reduce((acc, k) =>
    acc + report[k].filter(hasError).length, 0)
});

const formatA11yCount = issues =>
({
  allyErrors:
  _.flatMap(issues, i =>
    _.flatMap(i.violations, v =>
      v.nodes.length))
  .reduce((acc, x) => acc + x, 0)
});

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
    // snaps
    async.apply(execute, `create-snap ${__PATHS__.generated}/examples/ ${__PATHS__.build} ${__PATHS__.build}/dist/assets/styles/salesforce-lightning-design-system.css`),
    // website
    async.apply(execute, `cp -a ${__PATHS__.www}/. ${__PATHS__.build}/www`),
    // tokens
    async.apply(execute, `cp -a ${__PATHS__.designTokens}/. ${__PATHS__.build}/design-tokens`),
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
      },
      (done) => {
        let report = fs.readFileSync(`${__PATHS__.reports}/vnu_report.json`, 'utf-8') || '';
        done(null, formatVnuCount(JSON.parse(report)));
      },
      (done) => {
        let report = fs.readFileSync(`${__PATHS__.reports}/a11y.json`, 'utf-8') || '';
        done(null, formatA11yCount(JSON.parse(report)));
      },
    ], (err, [counts, tests, html, a11y]) => {
      if (err) return done(err);
      done(null, _.assign({}, counts, tests, html, a11y));
    }),
    // SHA
    async.apply(execute, 'git rev-parse HEAD'),
    // zip
    async.apply(zip, 'dist'),
    async.apply(zip, 'examples'),
    async.apply(zip, 'www'),
    async.apply(zip, 'design-tokens')
  ], (err, [_prepare, _dist, _examples, _snaps, _website, _tokens, info, stats, sha, _zip]) => {
    if (err) return done(err);
    let result = _.assign({}, { sha, info, stats }, {
      tag: process.env.TRAVIS_TAG || '',
      pullRequest: process.env.TRAVIS_PULL_REQUEST || '',
      branch: process.env.TRAVIS_BRANCH || '',
      commitRange: process.env.TRAVIS_COMMIT_RANGE || '',
      commit: process.env.TRAVIS_COMMIT || '',
      eventType: process.env.TRAVIS_EVENT_TYPE || '',
      version: packageJSON.version
    });
    done(null, result);
  });
};

module.exports = (done) => prepare((err, result) => {
  if (err) return done(err);
  publish({
    result,
    zips: ['dist.zip', 'examples.zip', 'www.zip', 'snapshot.json', 'design-tokens.zip']
      .map((p) => paths.build(p)),
    project: 'design-system'
  }, done);
});
