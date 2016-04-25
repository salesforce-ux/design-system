/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import './setup';
import defaultFs from 'fs';
import { resolve } from 'path';
import defaultRequest from 'superagent';
import cssstats from 'cssstats';
import globals from 'app_modules/global';
import defaultGulp from 'gulp';
import gulpzip from 'gulp-zip';
import { exec } from 'child_process';

const css_path = 'assets/styles/salesforce-lightning-design-system.css';
const zip_name = 'fullbuild.zip';
const local = resolve(__dirname, '../');

const defaultExecute = (cmd, cb) =>
  exec(cmd, { cwd: local, stdio: 'inherit' }, (err, out, stderr) => {
    if(err) throw(err);
    cb(out);
  });

const publish = function(fs=defaultFs, request=defaultRequest, execute=defaultExecute, gulp=defaultGulp) {

  const write = (path, contents) =>
    fs.writeFileSync(path, contents, 'utf8');

  const buildPath = extra =>
    resolve(__PATHS__.build, extra);

  const distPath = extra =>
    resolve(__PATHS__.build, 'dist', extra);

  const shouldPublishBranch = b =>
    b.match(/spring|summer|winter|master|development|next|release|buildserver/ig);

  const checkBranch = cb =>
    execute('git rev-parse --abbrev-ref HEAD', br =>
      shouldPublishBranch(br) ? cb() : br);

  const getDependencies = cb => {
    const deps = require(resolve(__PATHS__.root, 'package.json')).dependencies;
    cb(Object.keys(deps)
        .filter(k => k.match(/@salesforce/i))
        .reduce((acc, k) =>
          Object.assign(acc, {[k.split('/')[1]]: deps[k]}), {}));
  };

  const getStats = () =>
    cssstats(fs.readFileSync(distPath(css_path), 'utf8'));

  const writeStats = cb =>
    cb(write(buildPath('stats.json'), JSON.stringify(getStats())));

  const getSha = cb =>
    execute('git rev-parse HEAD', cb);

  const runDist = cb =>
    execute('npm run dist-npm', cb);

  const writePackageJSON = cb =>
    execute(`cp ${__PATHS__.root}/package.json ${__PATHS__.build}`, cb);

  const writeDist = cb =>
    runDist(() =>
      execute(`mv ${__PATHS__.npm} ${__PATHS__.build}/dist`, cb));

  const writeWebsite = cb =>
    execute(`cp -a ${__PATHS__.www}/. ${__PATHS__.build}/www`, cb);

  const writeGitInfo = cb =>
    execute('git show --format="%an|%ae|%ad|%s" | head -n 1', out =>
      cb(write(buildPath('gitinfo.txt'), out)));

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
    cb(write(
      buildPath('tests.json'),
      JSON.stringify(
        formatTestOut(fs.readFileSync(`${__PATHS__.logs}/test.txt`, 'utf-8') || ''))
    ));

  const zip = cb =>
    gulp.src(buildPath('**/*'))
    .pipe(gulpzip(zip_name))
    .on('error', cb)
    .pipe(gulp.dest(buildPath('')))
    .on('error', cb)
    .on('finish', cb);

  const poll = (attempts, url, done) =>
    request.get(url)
    .end((err, res) => {
      if(err) {
        if(attempts <= 15) {
          console.log('attempt #', attempts);
          setTimeout(() => poll(attempts+1, url, done), 10000);
        } else {
          throw err;
        }
      } else {
        done(null, res.text);
      }
    });

  const publish = (sha, deps, done) =>
    request
      .post(`${process.env.BUILD_SERVER_HOST}/projects/design-system/builds/${sha}`)
      .field('dependencies', JSON.stringify(deps))
      .attach('dist', buildPath(zip_name))
      .end((err, res) =>
        poll(0, `${process.env.BUILD_SERVER_HOST}/${res.text}`, done));

  return done =>
    checkBranch(() =>
      writeTestCounts(() =>
      writeDist(() =>
      writeWebsite(() =>
      writeGitInfo(() =>
      writeStats(() =>
      zip(() =>
      getSha(sha =>
        getDependencies(deps =>
          publish(sha, deps, done))))))))));
};

module.exports = publish;
