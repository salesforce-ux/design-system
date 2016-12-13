/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const exec = require('child_process').exec;
const through = require('through2');
const gutil = require('gulp-util');
const path = require('path');
const merge = require('merge');
const _ = require('lodash');
const PluginError = gutil.PluginError;

// We disliked the original gulp plugin, but wanted it simply for its ability to host
// vnu.jar for us on npm. What follows is the plugin code altered to our liking.
// Differences:
// 1) This doesn't blow up on error,
// 2) it returns a vinyl file with the report contents
// 3) it prints a . per test instead of silence
const lint = function(opt) {
  const real_vnu_module_path = path.resolve(__dirname, '../../node_modules/gulp-html');
  let vnu = 'java -jar ' + real_vnu_module_path + '/vnu/vnu.jar ';

  const options = merge({
    'errors-only': false,
    'format': 'gnu',
    'html': false,
    'no-stream': false,
    'verbose': false,
  }, opt);

  // Set options
  Object.keys(options).forEach(key => {
    let val = options[key];
    if (key === 'format' && val !== 'gnu') vnu += '--format ' + val + ' ';
    if (val === true) vnu += '--' + key + ' ';
  });

  const stream = through.obj((file, enc, cb) => {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) {
      return cb(new PluginError('gulp-html', 'Streaming not supported'));
    }

    exec(vnu + file.history, (err, stdout, stderr) => {
      process.stdout.write('.');
      const fl = new gutil.File({
        path: file.path,
        contents: new Buffer(stderr.trim())
      });

      if (err) {
        process.stdout.write('\n');
        process.stdout.write(stderr);
      }
      cb(null, fl);
    });
  });
  return stream;
};

const parseLine = file => {
  const rest = _.last(file.split('/.html/'));
  const name = rest.split('.html')[0];
  const [_name, line, type, val] = rest.split(':');
  return {name, line, val, type: type.trim()};
};

const makeReport = files =>
  _(files)
  .flatMap(f => f.split('\n'))
  .flatMap(parseLine)
  .groupBy('name')
  .mapValues(groups =>
    groups.map(({line, type, val}) =>
      ({[line]: {[type]: val}}))).value();

// This is our custom report file - not part of the vnu gulp plugin
const report = () => {
  let files = [];

  const transform = (file, enc, next) => {
    const contents = String(file.contents);
    if (contents) {
      files.push(contents);
    }
    next(null, null);
  };

  const flush = function(next) {
    const json = JSON.stringify(makeReport(files), null, 2);
    this.push(new gutil.File({
      path: 'index.json',
      contents: new Buffer(json)
    }));
    next();
  };

  return through.obj(transform, flush);
};

module.exports = {lint, report};
