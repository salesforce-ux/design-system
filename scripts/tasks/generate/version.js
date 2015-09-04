/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs';
import moment from 'moment';


export default function(done) {

  console.log('Getting version from git');

  let version = { 'sldsVersion': 'NOT_SET', 'travisJobNumber': 'NOT_SET', 'dateNow': 'NOT_SET'};

  try {

    version.dateNow = moment().format('MMMM Do YYYY, h:mm a');

    if (process.env.GIT_VERSION) {
      version.sldsVersion = process.env.GIT_VERSION;
    }

    if (process.env.TRAVIS_JOB_NUMBER) {
      version.travisJobNumber = process.env.TRAVIS_JOB_NUMBER;
    }

    const versionJSON = JSON.stringify(version, null, 2);
    const versionModule = `module.exports = ${versionJSON};`;
    fs.writeFileSync(path.resolve(__PATHS__.generated, 'site.version.js'), versionModule);
    done();

  } catch(err) {
    done(err);
  }

}
