/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import '../helpers/setup';

import async from 'async';
import { spawn } from 'child_process';
import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import stripAnsi from 'strip-ansi';

mkdirp(__PATHS__.logs);

let logs = '';
let run = (script, done) => {
  let callback = standardNodeCallbackError => {
    if (standardNodeCallbackError) {
      script.warning
      ? done(null, script.warning)
      : done(standardNodeCallbackError);
    } else {
      done();
    }
  };

  let command = spawn('npm',  ['run', script.test, '--', '--color'], {
    cwd: __PATHS__.root,
    stdio: ['inherit', 'pipe', 'inherit']
  });
  command.stdout.on('data', (d) => {
    let str = d.toString();
    logs += stripAnsi(str);
    console.log(str);
  });
  command.on('close', callback);
  command.on('error', callback);
};

const tests = [
  {test: 'test-unit'},
  {test: 'test-integration'},
  {test: 'test-browser'}
];

// HACK: The order of these tests is directly related
// to "formatTestOut" in scripts/helpers/publish.js
async.mapSeries(tests, run, (standardNodeCallbackError, warnings) => {
  fs.writeFileSync(`${__PATHS__.logs}/test.txt`, logs);
  if (standardNodeCallbackError) throw new Error('Tests Failed (see output above)');
  if (warnings.length) console.log(warnings.join('\n'));
});
