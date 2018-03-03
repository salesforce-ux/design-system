// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import { exec } from 'child_process';
import fs from 'fs';
import gulp from 'gulp';
import _ from 'lodash';
import through from 'through2';
import jar from 'vnu-jar/vnu-jar';
import Vinyl from 'vinyl';

// where to write. Normally we'd move control to the caller, but this
// the pattern for all other gulp scripts
const IGNORE = [
  /(.*)_JAVA_OPTIONS(.*)/i, // "Travis outputs this to make this interesting"
  /(.*)role=gridcell(.*)must be contained in, or owned by, an element with(.*)role=row/, // "An element with “role=gridcell“ must be contained in, or owned by, an element with “role=row“",
  /(.*)listbox(.*)for attribute(.*)aria-haspopup/, // "Bad value “listbox“ for attribute “aria-haspopup“ on element “div“.",
  /trees_grid(.*)tr(.*)is missing one or more of the following attributes:(.*)role/, // "Element “tr“ is missing one or more of the following attributes"
  /(.*)aria-expanded(.*)not allowed on element(.*)a(.*) at this point/ // Attribute “aria-expanded” not allowed on element “a” at this point.
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

export default paths => {
  const stream = through.obj();
  // eslint-disable-next-line handle-callback-err
  lint(paths, {}, (err, output) => {
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
      new Vinyl({
        path: 'vnu_report.json',
        contents: Buffer.from(contents)
      })
    );
    stream.end();
  });
  return stream.pipe(gulp.dest('.reports/'));
};
