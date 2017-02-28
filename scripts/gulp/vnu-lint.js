/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const exec = require('child_process').exec;
const _ = require('lodash');
const jar = require('vnu-jar/vnu-jar');

const lint = function(dir, opt, cb) {
  let vnu = 'java -jar ' + jar;

  const options = _.assign({
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

  exec(`${vnu} ${dir}`, {maxBuffer: Infinity}, (err, stdout, stderr) => cb(err, stdout, stderr));
};

const parseLine = file => {
  const rest = _.last(file.split('/.html/'));
  const name = rest.split('.html')[0];
  const [_name, line, type, val] = rest.split(':');
  return {name, line, val, type: String(type).trim()};
};

const report = output =>
  _(output.split('\n'))
  .flatMap(parseLine)
  .groupBy('name')
  .mapValues(groups =>
    groups.map(({line, type, val}) =>
      ({[line]: {[type]: val}}))).value();

module.exports = {lint, report};
