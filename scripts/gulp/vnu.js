// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const fs = require('fs');
const gulp = require('gulp');
const gutil = require('gulp-util');
const argv = require('yargs').argv;
const through = require('through2');
const exec = require('child_process').exec;
const _ = require('lodash');
const jar = require('vnu-jar/vnu-jar');

// where to write. Normally we'd move control to the caller, but this
// the pattern for all other gulp scripts
const FILEPATH = '.reports/';
const FILENAME = 'vnu_report.json';
const IGNORE = [
  /(.*)_JAVA_OPTIONS(.*)/i, // "Travis outputs this to make this interesting"
  /(.*)role=gridcell(.*)role=row/, // "An element with “role=gridcell“ must be contained in, or owned by, an element with “role=row“",
  /(.*)listbox(.*)aria-haspopup/, // "Bad value “listbox“ for attribute “aria-haspopup“ on element “div“.",
  /trees_grid(.*)tr(.*)missing one or more/, // "Element “tr“ is missing one or more of the following attributes"
  /treegrid(.*)tr(.*)missing one or more/i // Has comp name in the rule and two tests
];

const lint = function(dir, opt, cb) {
  let output = '';
  let vnu = 'java -jar ' + jar;

  const options = _.assign(
    {
      'errors-only': true,
      format: 'gnu',
      html: false,
      'no-stream': false,
      verbose: false
    },
    opt
  );

  // Set options
  Object.keys(options).forEach(key => {
    let val = options[key];
    if (key === 'format' && val !== 'gnu') vnu += '--format ' + val + ' ';
    if (val === true) vnu += ' --' + key + ' ';
  });
  console.log(vnu, dir);
  const child = exec(`${vnu} ${dir}`, { maxBuffer: Infinity }, e =>
    cb(e, output)
  );

  child.stderr.on('data', function(data) {
    output += data;
  });
};

const parseLine = file => {
  const rest = _.last(file.split('/.html/'));
  const name = rest.split('.html')[0];
  // eslint-disable-next-line no-unused-vars
  const [_name, line, type, val] = rest.split(':');
  return { name, line, val, type: String(type).trim() };
};

const report = output =>
  _(output.split('\n'))
    .flatMap(parseLine)
    .filter(x => x.name)
    .groupBy('name')
    .mapValues(groups =>
      groups.map(({ line, type, val }) => ({ [line]: { [type]: val } }))
    )
    .value();

const parseComponentArgument = () =>
  (argv.components && argv.components.split(',')) || '*';

const getComponentsToTest = () =>
  String(parseComponentArgument())
    .split(',')
    .map(x => `.html/${x}*.html`)
    .join(' ');

const createVnuReport = stream => {
  // eslint-disable-next-line handle-callback-err
  lint(getComponentsToTest(), {}, (err, output) => {
    const vnuOutput = String(output)
      .split('\n')
      .filter(line => !IGNORE.some(ignore => line.match(ignore)))
      .join('\n');

    if (vnuOutput) {
      console.log('-----VNU ERROR----');
      console.log(vnuOutput);
      throw new Error('Html Failure (Vnu)');
    }
    const contents = JSON.stringify(report(vnuOutput), null, 2);
    stream.write(
      new gutil.File({
        path: FILENAME,
        contents: Buffer.from(contents)
      })
    );
  });
};

// gulp lint:vnu
// gulp lint:vnu --components path
// gulp lint:vnu --components path,tabs,data-tables
gulp.task('lint:vnu', ['generate:wrappedexamples'], () => {
  const stream = through.obj();
  createVnuReport(stream);
  return stream.pipe(gulp.dest(FILEPATH));
});
