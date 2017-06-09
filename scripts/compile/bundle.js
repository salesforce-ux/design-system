// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const path = require('path');
const webpackConfig = require('./webpack.config');
const Task = require('data.task');
const I = require('immutable-ext');
const Minify = require('./minify');
const {ui, variants} = require('../ui');

const utilityPath = component =>
  `./ui/utilities/${component}/example.jsx`;

const componentPath = (component, variant) =>
  `./ui/components/${component}/${variant}/example.jsx`;

const mappings = {
  components: (entry, comp, name) =>
    variants(comp)
    .reduce((acc, v) =>
      acc.set(`components/${name}/${v.get('id')}`, componentPath(name, v.get('id'))),
      entry
    ),
  utilities: (entry, comp, name) =>
    entry.set(`utilities/${name}`, utilityPath(name))
};

const chunkedEntry = () =>
  ui()
  .map(ui =>
    ui
    .reduce((entry, group, groupName) =>
      group
      .reduce((entry, comp, name) =>
        mappings[groupName](entry, comp, name),
        entry
      ),
      I.Map()
    )
  );

const externals = {
  'react': 'React',
  'react-dom': 'ReactDOM'
};

module.exports = webpack => {
  // chunked :: Task Error I.Map
  const chunked = chunkedEntry().map(entry =>
    webpackConfig
    .set('entry', entry)
    .set('externals', externals)
    .setIn(['output', 'library'], 'SLDS')
    .setIn(['output', 'filename'], '[name].js')
    .setIn(['output', 'jsonpFunction'], 'webpackJsonpSLDS')
    .set('plugins', [
      new Minify(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: 2
      })
    ])
  );

  // commonJS :: I.Map
  const commonJS = webpackConfig
    .set('entry', './scripts/compile/entry.js')
    .set('externals', externals)
    .setIn(['output', 'libraryTarget'], 'commonjs2')
    .setIn(['output', 'filename'], 'slds.common.js');

  // umd :: I.Map
  const umd = webpackConfig
    .set('entry', './scripts/compile/entry.js')
    .setIn(['output', 'library'], 'SLDS')
    .setIn(['output', 'libraryTarget'], 'umd')
    .setIn(['output', 'filename'], 'slds.umd.js');

  const configs = { umd, commonJS, chunked };

  // watch :: (I.Map, Path, WatchOptions) -> Task Error Stats
  const watch = (config, outputPath, options = {}) =>
    new Task((reject, resolve) =>
      webpack(
        config
        .setIn(['output', 'path'], outputPath)
        .toJS()
      )
      .watch(options, (err, stats) => {
        if (err) return reject(err);
        resolve(stats);
      })
    );

  // compile :: (I.Map, Path) -> Task Error Stats
  const compile = (config, outputPath) =>
    new Task((reject, resolve) =>
      webpack(
        config
        .setIn(['output', 'path'], outputPath)
        .toJS()
      )
      .run((err, stats) => {
        if (err) return reject(err);
        if (stats.hasErrors()) {
          const errors = stats.toJson().errors.map(e => {
            if (/'lodash'/.test(e) && /module not found/i.test(e)) {
              return `
                The module "lodash" should not be imported directly.
                Instead, install the method you need from: https://www.npmjs.com/browse/keyword/lodash-modularized
                  1. npm install lodash.truncate --save-dev
                  2. add it to "ui/components/helpers/index.js"
                  3. import _ from '../../../shared/helpers';
              `;
            }
            return e;
          });
          return reject(new Error(
            errors.join(`\n\n-----------------------------------\n\n`)
          ));
        }
        resolve(stats);
      })
    );

  // createLibrary :: Path -> Task Error (List Stats)
  const createLibrary = outputDir =>
    I.List([
      {config: Task.of(umd), extraFolder: ''},
      {config: Task.of(commonJS), extraFolder: ''},
      {config: chunked, extraFolder: 'chunked'}
    ])
    .traverse(Task.of, ({config, extraFolder}) =>
      config
      .chain(cfg =>
        compile(cfg, path.resolve(outputDir, '__internal', extraFolder))
      )
    );

  return {configs, compile, watch, createLibrary, chunkedEntry};
};
