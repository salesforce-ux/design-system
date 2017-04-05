// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import gulp from 'gulp';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import _ from 'lodash';
import through from 'through2';
import path from 'path';
import { createValidator } from '@salesforce-ux/design-system-markup/server';
import { getComments } from '../markup-style';
import createParser from '@salesforce-ux/design-system-parser';

const renderMessage = result =>
  `${result.selector} did not satisfy ${result.restrict})`;

const sumBy = (f, xs) => xs.reduce((acc, x) => acc + f(x), 0);

const renderReport = (fullReport, fileCount) =>
({
  uniqueErrors: Object.keys(fullReport).length,
  total: Object
         .keys(fullReport)
         .reduce((acc, k) => acc + sumBy(x => x.lines.length, fullReport[k]), 0),
  fileCount,
  fullReport
});

const renderItem = (filepath, lines) =>
({
  file: path.basename(filepath, '.html'),
  lines
});

const create = filepath => (fullReport, r) => {
  const msg = renderMessage(r);
  return Object.assign(fullReport, {[msg]: (fullReport[msg] || []).concat(renderItem(filepath, r.lines))});
};

const printToConsole = (...xs) =>
  console.log.apply(console, xs);

const report = validate => {
  const fullReport = {};
  let count = 0;
  const transform = (file, enc, next) => {
    const results = validate(file.contents);
    if(results.length) {
      _(results)
      .uniqBy(e => e.lines.join(','))
      .reduce(create(file.path), fullReport);
    }
    count += 1;
    next(null, file, enc);
  };

  const flush = function(next) {
    const report = renderReport(fullReport, count);
    const json = JSON.stringify(report, null, 2);
    printToConsole(json, 'Full info in .reports/validate.json');
    this.push(new gutil.File({
      path: 'validations.json',
      contents: new Buffer(json)
    }));
    next();
  };

  return through.obj(transform, flush);
};

const runValidations = validate =>
  gulp.src(['.html/*'])
  .pipe(report(validate))
  .pipe(gulp.dest('.reports/'));


const validate = () =>
  getComments()
  .map(createParser)
  .map(parser => createValidator(parser.comments.map(c => c.get('annotations'))))
  .map(runValidations);

module.exports = { validate };
