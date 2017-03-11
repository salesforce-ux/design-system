// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import gulp from 'gulp';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import _ from 'lodash';
import through from 'through2';
import { createValidator } from '@salesforce-ux/design-system-markup/server';
import { getComments } from '../markup-style';
import createParser from '@salesforce-ux/design-system-parser';

const renderMessage = result =>
  `${result.get('selector')} did not satisfy ${result.get('restrict')} (${result.get('lines').join(', ')})`;

const renderResults = results =>
  _(results.toArray())
  .uniqBy(e => e.get('lines').join(','))
  .map(renderMessage)
  .value();

const formatResults = results =>
  ({
    total: results.count(),
    failures: renderResults(results)
  });

const renderReport = fullReport =>
({
  total: Object
         .keys(fullReport)
         .reduce((acc, k) =>
            acc + fullReport[k].total, 0),
  fileCount: Object.keys(fullReport).length,
  fullReport
});

const printToConsole = report =>
  console.log(report);

const report = validate => {
  const fullReport = {};
  const transform = (file, enc, next) => {
    const results = validate(file.contents);
    if(results.count()) {
      fullReport[file.path] = formatResults(results);
    }
    next(null, file, enc);
  };

  const flush = function(next) {
    const report = renderReport(fullReport);
    const json = JSON.stringify(report, null, 2);
    printToConsole(json);
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
  .map(parser => createValidator(parser.comments))
  .map(runValidations);

module.exports = { validate };
