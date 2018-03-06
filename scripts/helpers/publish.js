// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const _ = require('lodash');
const async = require('async');
const cssstats = require('cssstats');
const { exec } = require('child_process');
const fs = require('fs');
const gulp = require('gulp');
const gulpzip = require('gulp-zip');
const path = require('path');
const buildServerApi = require('@salesforce-ux/build-server-api');

const packageJSON = require('../../package.json');
const paths = require('./paths');

const { publish } = buildServerApi(process.env.BUILD_SERVER_HOST_NEW);

const CSS_PATH = 'assets/styles/salesforce-lightning-design-system.css';

const buildPaths = {
  build: path.resolve.bind(path, paths.build),
  buildDist: path.resolve.bind(path, paths.build, 'dist')
};

const execute = (cmd, done) =>
  exec(cmd, { cwd: paths.root, stdio: 'inherit' }, (err, out, stderr) => {
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

const hasError = x =>
  Object.keys(x).some(k => Object.keys(x[k]).includes('error'));

const formatVnuCount = report => ({
  htmlErrors: Object.keys(report).reduce(
    (acc, k) => acc + report[k].filter(hasError).length,
    0
  )
});

const formatA11yCount = issues => ({
  allyErrors: _.flatMap(issues, i =>
    _.flatMap(i.violations, v => v.nodes.length)
  ).reduce((acc, x) => acc + x, 0)
});

const zip = (src, done) =>
  gulp
    .src(buildPaths.build(`${src}/**/*`))
    .pipe(gulpzip(`${src}.zip`))
    .on('error', done)
    .pipe(gulp.dest(buildPaths.build()))
    .on('error', done)
    .on('finish', done);

const prepare = done => {
  console.log('[BUILD:PREPARE]');
  return async.series(
    [
      // clean
      done =>
        async.series(
          [
            async.apply(execute, `rm -rf ${paths.build}`),
            async.apply(execute, `mkdir ${paths.build}`)
          ],
          done
        ),
      // dist
      done =>
        async.series(
          [
            async.apply(execute, `cp -a ${paths.dist}/. ${paths.build}/dist`),
            async.apply(execute, `rm -rf ${paths.build}/dist/*.zip`)
          ],
          done
        ),
      // examples
      async.apply(
        execute,
        `cp -a ${paths.generated}/examples/. ${paths.build}/examples`
      ),
      // snap which is created during the test/lint phase
      async.apply(
        execute,
        `mv ${paths.generated}/snapshot.json ${paths.build}`
      ),
      // tokens
      async.apply(
        execute,
        `cp -a ${paths.designTokens}/. ${paths.build}/design-tokens`
      ),
      // git info
      async.apply(execute, 'git show --format="%an|%ae|%ad|%s" | head -n 1'),
      // stats
      done =>
        async.series(
          [
            done => {
              let css = fs.readFileSync(buildPaths.buildDist(CSS_PATH), 'utf8');
              let stats = cssstats(css);
              done(null, formatStats(stats));
            },
            done => {
              let report =
                fs.readFileSync(`${paths.reports}/vnu_report.json`, 'utf-8') ||
                '';
              done(null, formatVnuCount(JSON.parse(report)));
            },
            done => {
              let report =
                fs.readFileSync(`${paths.reports}/a11y.json`, 'utf-8') || '';
              done(null, formatA11yCount(JSON.parse(report)));
            },
            done => {
              let report =
                fs.readFileSync(`${paths.reports}/validations.json`, 'utf-8') ||
                '';
              done(null, { validationFailures: JSON.parse(report).total });
            }
          ],
          (err, [counts, html, a11y, validations]) => {
            if (err) return done(err);
            done(null, _.assign({}, counts, html, a11y, validations));
          }
        ),
      // zip
      async.apply(zip, 'dist'),
      async.apply(zip, 'examples'),
      async.apply(zip, 'design-tokens')
    ],
    (err, [_prepare, _dist, _examples, _snaps, _tokens, info, stats, _zip]) => {
      if (err) return done(err);
      let result = _.assign(
        {},
        { info, stats },
        {
          sha: process.env.TRAVIS_COMMIT,
          tag: process.env.TRAVIS_TAG || '',
          pullRequest: process.env.TRAVIS_PULL_REQUEST || '',
          branch: process.env.TRAVIS_BRANCH || '',
          commitRange: process.env.TRAVIS_COMMIT_RANGE || '',
          headCommit: process.env.TRAVIS_PULL_REQUEST_SHA,
          commit: process.env.TRAVIS_COMMIT || '',
          eventType: process.env.TRAVIS_EVENT_TYPE || '',
          version: packageJSON.version,
          isNew: true
        }
      );
      done(null, result);
    }
  );
};

module.exports = done =>
  prepare((err, result) => {
    if (err) return done(err);
    publish(
      {
        result,
        zips: [
          'dist.zip',
          'examples.zip',
          'snapshot.json',
          'design-tokens.zip'
        ].map(p => buildPaths.build(p)),
        project: 'design-system'
      },
      done
    );
  });
