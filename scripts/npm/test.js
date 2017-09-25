// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const async = require('async');
const { spawn } = require('child_process');
const fs = require('fs');
const mkdirp = require('mkdirp');
const stripAnsi = require('strip-ansi');

const paths = require('../helpers/paths');

mkdirp(paths.logs);

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

  let command = spawn('npm', ['run', script.test, '--', '--color'], {
    cwd: paths.root,
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
  { test: 'test-mocha' },
  { test: 'test-jest' }
];

// HACK: The order of these tests is directly related
// to "formatTestOut" in scripts/helpers/publish.js
async.mapSeries(tests, run, (standardNodeCallbackError, warnings) => {
  fs.writeFileSync(`${paths.logs}/test.txt`, logs);
  if (standardNodeCallbackError) throw new Error('Tests Failed (see output above)');
  if (warnings.length) console.log(warnings.join('\n'));
});
