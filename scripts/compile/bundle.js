// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const webpack = require('webpack');
const path = require('path')
const webpackConfig = require('./webpack.config');
const Task = require('data.task');
const I = require('immutable-ext')
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
  'react-dom': 'ReactDOM',
  'lodash': 'lodash'
};

const chunked = chunkedEntry().map(entry =>
  webpackConfig
  .set('entry', entry)
  .set('externals', externals)
  .setIn(['output', 'library'], 'SLDS')
  .setIn(['output', 'filename'], '[name].js')
  .set('plugins', [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    })
  ])
);

const commonJS = Task.of(
  webpackConfig
  .set('entry', './scripts/compile/entry.js')
  .set('externals', externals)
  .setIn(['output', 'libraryTarget'], 'commonjs2')
  .setIn(['output', 'filename'], 'slds.common.js')
);

const umd = Task.of(
  webpackConfig
  .set('entry', './scripts/compile/entry.js')
  .setIn(['output', 'library'], 'SLDS')
  .setIn(['output', 'libraryTarget'], 'umd')
  .setIn(['output', 'filename'], 'slds.umd.js')
);

const configs = {
  umd: {cfg: umd, extraFolder: ''},
  commonJS: {cfg: commonJS, extraFolder: ''},
  chunked: {cfg: chunked, extraFolder: 'chunked'}
};

const compile = (config, outputPath) =>
  new Task((reject, resolve) =>
    webpack(
      config
      .setIn(['output', 'path'], outputPath)
      .toJS()
    )
    .run((err, stats) => {
      if (err) return reject(err);
      resolve(stats);
    })
  );

const runCfg = outputDir => (obj, key) =>
  obj.cfg
  .chain(cfg =>
    compile(cfg, path.resolve(outputDir, '__internal', obj.extraFolder))
  );

const createLibrary = outputDir =>
  I.Map(configs).traverse(Task.of, runCfg(outputDir));

module.exports = {configs, compile, createLibrary, chunkedEntry};
