// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const gulp = require('gulp');
const gulpFile = require('gulp-file');
const path = require('path');
const paths = require('../helpers/paths');
const fs = require('fs');
const I = require('immutable-ext');
const Either = require('data.either');
const { Right, Left } = Either;

const createParser = require('@salesforce-ux/design-system-parser');
const {
  mapTree,
  toList
} = require('@salesforce-ux/design-system-previewer/lib/tree');

const getComments = require('./comments');
const getShowcase = require('./showcase');

const isVariant = x => x.getIn(['annotations', 'variant']);
const isUtil = x => x.getIn(['annotations', 'utility']);

const variants = c => toList(c).filter(isVariant);

const toMap = f => (ac, c) => ac.set(c.get('id'), f(c.get('id')).get());

const exists = p => (fs.existsSync(p) ? Right(p) : Left(null));

const pathIfExists = filepath =>
  exists(path.resolve(paths.root, filepath))
    .map(() => filepath)
    .getOrElse(null);

const utilityExamplePath = utilId =>
  pathIfExists(`./ui/utilities/${utilId}/example.jsx`);

const componentExamplePath = (componentId, variantId) =>
  pathIfExists(`./ui/components/${componentId}/${variantId}/example.jsx`);

const docPath = (type, componentId) =>
  pathIfExists(`./ui/${type}/${componentId}/docs.mdx`);

const createUI = parser =>
  I.Map({
    components: parser.components().reduce(toMap(parser.component), I.Map()),
    utilities: parser.utilities().reduce(toMap(parser.utility), I.Map())
  });

const showcasePath = (componentId, item) =>
  isVariant(item) || isUtil(item)
    ? isUtil(item) // skips util's children since they aren't utils...
      ? utilityExamplePath(componentId)
      : componentExamplePath(componentId, item.get('id'))
    : null;

const addShowcaseAndDocPaths = (type, componentId, item) => {
  const docs = docPath(type, item.get('id'));
  const showcase = showcasePath(componentId, item);
  return item
    .set('docPath', docs)
    .set('showcasePath', showcase)
    .set('showcase', getShowcase(showcase));
};

const uiFromComments = () =>
  getComments()
    .map(createParser)
    .map(createUI);

const ui = () =>
  uiFromComments().map(u =>
    u.map((group, type) =>
      group.map((item, componentId) =>
        mapTree(item, itm => addShowcaseAndDocPaths(type, componentId, itm))
      )
    )
  );

const writeToDist = () =>
  ui()
    .map(x => JSON.stringify(x, null, 2))
    .chain(
      json =>
        new Task((reject, resolve) =>
          gulpFile('ui.json', json, { src: true })
            .pipe(gulp.dest(paths.dist))
            .on('finish', resolve)
            .on('error', reject)
        )
    );

module.exports = {
  ui,
  isVariant,
  variants,
  writeToDist,
  componentExamplePath,
  utilityExamplePath
};
