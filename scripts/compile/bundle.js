// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const fs = require('fs');
const I = require('immutable-ext');
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');

const toTask = require('futurize').futurize(Task);
const writeFile = toTask(fs.writeFile);

const paths = require('../helpers/paths');

const { FOLDERNAME, chunkedEntry, manifest } = require('./helpers');
const webpackConfig = require('./webpack.config');

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'js-beautify': 'JSBeautify'
};

// chunked :: Task Error I.Map
const createChunkedConfig = prefix =>
  webpackConfig
    .set('externals', externals)
    .setIn(['output', 'library'], ['SLDS', '[name]'])
    .setIn(['output', 'filename'], '[name]') // [name] will already have ".js" appended
    .setIn(
      ['output', 'jsonpFunction'],
      `webpackJsonpSLDS_${prefix.replace(
        new RegExp(_.escapeRegExp(path.sep), 'g'),
        '_'
      )}`
    )
    .setIn(['optimization', 'splitChunks'], {
      chunks: 'all',
      name: `${prefix}/common.js`,
      minChunks: 2
    });

// chunkedConfigs :: Task Error (I.List WebpackCfg)
const chunkedConfigs = chunkedEntry.map(entryMap =>
  entryMap
    .map((entry, prefix) => createChunkedConfig(prefix).set('entry', entry))
    .toList()
);

// umd :: WebpackCfg
const umd = webpackConfig
  .set('entry', './scripts/compile/entry.slds.js')
  .setIn(['output', 'library'], 'SLDS')
  .setIn(['output', 'libraryTarget'], 'umd')
  .setIn(['output', 'filename'], `${FOLDERNAME}/slds.umd.js`);

// Task Error (List WebpackCfg)
// const configs = Task.of(I.List.of(umd));
const configs = chunkedConfigs.map(configs =>
  configs
    .unshift(umd)
    .filter(
      config =>
        I.Map.isMap(config.get('entry'))
          ? config.get('entry').count()
          : config.has('entry')
    )
);

// watch :: (I.Map, Path, WatchOptions) -> Task Error Stats
const watch = (options = {}) =>
  new Task((reject, resolve) => {
    const config = umd.set('mode', 'development').toJS();
    webpack(config).watch(options, (err, stats) => {
      if (err) return reject(err);
      if (stats.hasErrors()) {
        const errors = stats.toJson().errors.join('\n\n');
        console.log(errors);
      }
      resolve(stats);
    });
  });

// compile :: (I.Map, Path) -> Task Error Stats
const compile = configs =>
  new Task((reject, resolve) => {
    return webpack(configs.toJS()).run((err, stats) => {
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
        return reject(
          new Error(errors.join(`\n\n-----------------------------------\n\n`))
        );
      }
      resolve(stats);
    });
  });

const compileLibrary = () => configs.chain(compile);

const writeManifest = stats =>
  manifest
    .map(m => JSON.stringify(m, null, 2))
    .chain(contents =>
      writeFile(path.join(paths.dist, 'manifest.json'), contents)
    )
    .map(() => stats);

// createLibrary :: () -> Task Error (List Stats)
const createLibrary = () => compileLibrary().chain(writeManifest);

module.exports = {
  configs,
  compile,
  watch,
  createLibrary
};
