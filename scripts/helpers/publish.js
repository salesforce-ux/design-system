/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import './setup';
import fs from 'fs';
import { resolve } from 'path';
import cssstats from 'cssstats';
import globals from 'app_modules/global';
import gulp from 'gulp';
import gulpzip from 'gulp-zip';
import pckg from '../../package.json';
import { exec } from 'child_process';
import { getSha } from './git';

const buildServer = require('@salesforce-ux/build-server-api')(process.env.BUILD_SERVER_HOST);

const css_path = 'assets/styles/salesforce-lightning-design-system.css';
const zip_name = 'fullbuild.zip';
const local = resolve(__dirname, '../');

const execute = (cmd, cb) =>
  exec(cmd, { cwd: local, stdio: 'inherit' }, (err, out, stderr) => {
    if(err) throw(err);
    cb(out);
  });


const write = (path, contents) =>
  fs.writeFileSync(path, contents, 'utf8');

const buildPath = extra =>
  resolve(__PATHS__.build, extra);

const distPath = extra =>
  resolve(__PATHS__.build, 'dist', extra);

const getDependencies = cb => {
  const deps = Object.assign({}, pckg.devDependencies, pckg.dependencies);
  cb(Object.keys(deps)
      .filter(k => k.match(/@salesforce/i))
      .reduce((acc, k) =>
        Object.assign(acc, {[k.split('/')[1]]: deps[k]}), {}));
};

const normalizeStats = stats =>
  ({
    kbSize: stats.size,
    gzipSize: stats.gzipSize,
    ruleCount: stats.rules.total,
    selectorCount: stats.selectors.total,
    declarationCount: stats.declarations.total
  });

const getStats = () =>
  normalizeStats(cssstats(fs.readFileSync(distPath(css_path), 'utf8')));

const writeStats = cb =>
  writeTestCounts(tests =>
    cb(Object.assign(getStats(), tests)));

const runDist = cb =>
  execute('npm run dist-npm', cb);

const writeDist = cb =>
  runDist(() =>
    execute(`mv ${__PATHS__.npm} ${__PATHS__.build}/dist`, () =>
      execute(`rm -rf ${__PATHS__.build}/dist/`+'*.zip', cb)));

const writeWebsite = cb =>
  execute(`cp -a ${__PATHS__.www}/. ${__PATHS__.build}/www`, cb);

const writeGitInfo = cb =>
  execute('git show --format="%an|%ae|%ad|%s" | head -n 1', cb);

const formatTestOut = out => {
  const matches = out.match(/(\d+)\s+(SUCCESS|passing)/ig);
  if (!matches) return {};
  return {
    unitTests: parseInt(matches[0]),
    integrationTests: parseInt(matches[1]),
    allyTests: parseInt(matches[2])
  };
};

const writeTestCounts = cb =>
  cb(formatTestOut(fs.readFileSync(`${__PATHS__.logs}/test.txt`, 'utf-8') || ''));

const zip = cb =>
  gulp.src(buildPath('**/*'))
  .pipe(gulpzip(zip_name))
  .on('error', cb)
  .pipe(gulp.dest(buildPath('')))
  .on('error', cb)
  .on('finish', cb);

const publish = (sha, info, stats, deps, done) =>
  buildServer.publish({
    project: 'design-system',
    sha: sha,
    fields: { info: info, stats: JSON.stringify(stats), dependencies: JSON.stringify(deps), tag: (process.env.TRAVIS_TAG || ''), version: pckg.version },
    zipPath: buildPath(zip_name),
    retryCount: 30 // s3 might take a while until we optimize
  }).errors((err, push) => { throw err; })
    .each(result => console.log('res', result.body));

module.exports = done =>
  writeDist(() =>
  writeWebsite(() =>
  writeGitInfo(info =>
  writeStats(stats =>
  zip(() =>
  getSha(sha =>
    getDependencies(deps =>
      publish(sha, info, stats, deps, done))))))));
