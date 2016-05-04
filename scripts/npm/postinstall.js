/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const path = require('path');
const { execSync } = require('child_process');
const { download } = require('@salesforce-ux/build-server-api')(process.env.BUILD_SERVER_HOST);

const local = path.resolve.bind(path, __dirname, '../../');

const exec = (command, cwd = '') =>
  execSync(command, {
    cwd: local(cwd),
    stdio: 'inherit',
    env: Object.assign({}, process.env)
  });

const downloadBuild = () =>
  download({
    project: 'design-system',
    sha: process.env.SOURCE_VERSION, // magic heroku variable
    folderPath: 'www',
    retryInterval: 10000,
    retryCount: 60, // this may take a long time if travis kicks off in parallel
    extractPath: local()
  });

// This assumes heroku has waited for travis to pass (and send a build to the build-server)
if (process.env.HEROKU_APP_NAME) {
  const url = `https://${process.env.GITHUB_USER}:${process.env.GITHUB_USER_ACCESS_TOKEN}@${process.env.DEPLOY_REPO}`;
  exec(`git clone ${url} server`);
  exec('npm install --production', 'server/heroku');
  exec('npm run dist', 'server/heroku');
  downloadBuild()
  .errors((err, push) => { throw err; })
  .each(() => exec('mv www .www')); // TODO: REMOVE THIS AND THE IF/ELSE IN THE DEPLOY APP
} else {
  // Verify & install ruby dependencies using our script
  exec('npm run install-ruby-dependencies');
}
