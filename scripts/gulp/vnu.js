// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const gutil = require('gulp-util');
const minimist = require('minimist');
const through = require('through2');
const exec = require('child_process').exec;
const _ = require('lodash');
const jar = require('vnu-jar/vnu-jar');

// where to write. Normally we'd move control to the caller, but this
// the pattern for all other gulp scripts
const FILEPATH = '.reports/'
const FILENAME = 'vnu_report.json'

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

const parseComponentArgument = argv =>
  minimist(argv.slice(2)).components || '*';

const getComponentsToTest = argv =>
  String(parseComponentArgument(argv))
  .split(',')
  .map(x => `./html/${x}*.html`)
  .join(',')

const createVnuReport = (stream, argv) =>
  // eslint-disable-next-line handle-callback-err
  lint(getComponentsToTest(argv), {}, (err, stdout, stderr) => {
    const contents = JSON.stringify(report(stderr), null, 2);
    stream.write(
      new gutil.File({
        path: FILENAME,
        contents: Buffer.from(contents)
      }));
  });

// gulp lint:vnu
// gulp lint:vnu --components path
// gulp lint:vnu --components path,tabs,data-tables
gulp.task('lint:vnu', ['generate:wrappedexamples'], () =>{
  const stream = through.obj();
  createVnuReport(stream, process.argv);
  return stream.pipe(gulp.dest(FILEPATH));
});
