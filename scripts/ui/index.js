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

/**
 *
 * @param {string} filepath
 * @returns {string|null} filepath
 */
const pathIfExists = filepath =>
  exists(path.resolve(paths.root, filepath))
    .map(() => filepath)
    .getOrElse(null);

/**
 *
 * @param {string} utilId - utility name
 * @return {string} filepath to the utilty based on its name
 */
const utilityExamplePath = utilId =>
  pathIfExists(`./ui/utilities/${utilId}/example.jsx`);

/**
 *
 * @param {string} type - type of component
 * @param {string} componentId - name of the component
 * @param {string} variantId - variant name
 * @returns {string} './ui/components/${componentId}/${variantId}/example.jsx' || './ui/modules/${componentId}/${variantId}/example.jsx'
 */
const componentExamplePath = (type, componentId, variantId) => {
  return pathIfExists(`./ui/${type}/${componentId}/${variantId}/example.jsx`);
};

/**
 *
 * @param {string} type - {utiltity|component}
 * @param {string} componentId - nameof the component
 * @returns {string} './ui/${type}/${componentId}/docs.mdx' || './ui/modules/${componentId}/docs.mdx.jsx'
 */
const docPath = (type, componentId) => {
  return pathIfExists(`./ui/${type}/${componentId}/docs.mdx`);
};

/**
 *
 * @param {*} parser - parser from design-system-parser used to parse scss comments
 * @returns {obj} - immutable map of components, modules and utilities with their documentation, basically what forms UI.json
 */
const createUI = parser =>
  I.Map({
    components: parser.components().reduce(toMap(parser.component), I.Map()),
    modules: parser
      .moduleComponents()
      .reduce(toMap(parser.moduleComponent), I.Map()),
    utilities: parser.utilities().reduce(toMap(parser.utility), I.Map())
  });

/**
 *
 * @param {string} type module or component or utility
 * @param {string} componentId component name
 * @param {obj} item - Immutible object
 * @returns {string|null} - file path to either the component, component variant, or utility examples jsx file.
 */
const showcasePath = (type, componentId, item) =>
  isVariant(item) || isUtil(item)
    ? isUtil(item) // skips util's children since they aren't utils...
      ? utilityExamplePath(componentId)
      : componentExamplePath(type, componentId, item.get('id'))
    : null;

/**
 * add the paths to the docs and examples.jsx files
 * @param {string} type - component | utility
 * @param {string} componentId - name of the component or utility
 * @param {obj} item - Immutible item from the immutible UI map
 * @returns {obj} - Immutible item with a docPath, showcasePath and showcase added to the item
 */
const addShowcaseAndDocPaths = (type, componentId, item) => {
  // grab the path to the docs mdx file
  const docs = docPath(type, item.get('id'), componentId);
  // grab the path to the example.jsx file
  const showcase = showcasePath(type, componentId, item);
  return (
    item
      // add the docs path to the immutible item
      .set('docPath', docs)
      // add the path to the example file to the immutible item
      .set('showcasePath', showcase)
      // add showcase object to the item
      .set('showcase', getShowcase(showcase))
  );
};

/**
 * parse the comments from scss files
 * @returns {Object} Immutable map of Components and Utilities and their docs
 */
const uiFromComments = () => {
  return getComments()
    .map(createParser)
    .map(createUI);
};

// create object for ui.json
const ui = () => {
  return uiFromComments().map(u => {
    // The entire UI based on comments from sass files
    return u.map((group, type) => {
      // each group of UI, currently component or utility
      return group.map((item, componentId) => {
        // Each item in components or utitlies
        return mapTree(item, itm => {
          // add paths to the example.jsx file and mdx files
          return addShowcaseAndDocPaths(type, componentId, itm);
        });
      });
    });
  });
};

/**
 * Get json from parsed comments
 * uiJson : Task -> string
 */
const uiJson = () =>
  ui()
    .map(x => JSON.stringify(x, null, 2))
    .chain(json => new Task((rej, res) => json))
    .fork(y => y);

// write ui.json in dist folder
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
  uiJson,
  isVariant,
  variants,
  writeToDist,
  componentExamplePath,
  utilityExamplePath
};
