// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const exec = require('child_process').exec;
const _ = require('lodash');
const jar = require('vnu-jar/vnu-jar');

const lint = function (dir, opt, cb) {
  let vnu = 'java -jar ' + jar;

  const options = _.assign({
    'errors-only': false,
    'format': 'gnu',
    'html': false,
    'no-stream': false,
    'verbose': false
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
  // eslint-disable-next-line no-unused-vars
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
