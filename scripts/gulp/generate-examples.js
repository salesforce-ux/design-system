// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const gulp = require('gulp');
const gutil = require('gulp-util');
const I = require('immutable');
const Task = require('data.task');
const insert = require('gulp-insert');
const through = require('through2');

const { ui, examples, isVariant } = require('../ui');
const {toList} = require('@salesforce-ux/design-system-previewer/lib/tree');
const paths = require('../helpers/paths');

gulp.task('generate:wrappedexamples', ['generate:examples'], () =>
  gulp
    .src(`${paths.generated}/examples/*.html`)
    .pipe(insert.wrap('<!DOCTYPE html><html lang="en"><head><title>Example</title><link type="text/css" rel="stylesheet" href="../.assets/styles/index.css" /></head><body>', '</body></html>'))
    .pipe(gulp.dest(paths.html)));

const name = (component, variant) => item =>
  I.List.of(
    component.get('id'),
    variant.get('id'),
    item.get('id')
  ).join('_');

gulp.task('generate:examples', () => {
  //const stream = through.obj();
  //ui()
  //.map(ui => components(ui).concat(utilities(ui)))
  //.map(components =>
    //components
    //.map(component =>
      //Lib.variants(component)
      //.forEach(variant =>
        //Lib.getExample(component, variant, {context: true})
        //.forEach(example =>
          //stream.write(new gutil.File({
            //path: `${name(component, variant, example)}.html`,
            //contents: Buffer.from(example.get('markup'))
          //}))
        //)
      //)
    //)
  //).fork(
    //e => { throw e; },
    //() => stream.end()
  //)
  //return stream
    //.pipe(gulp.dest(`${paths.generated}/examples`));
});
