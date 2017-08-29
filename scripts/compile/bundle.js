// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const I = require('immutable-ext');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const paths = require('../helpers/paths');

const toTask = require('futurize').futurize(Task);
const writeFile = toTask(fs.writeFile);

const { FOLDERNAME, entry, manifest } = require('./entry');
const Minify = require('./minify');
const webpackConfig = require('./webpack.config');

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

// chunked :: Task Error I.Map
const chunked = prefix =>
  webpackConfig
    .set('externals', externals)
    .setIn(['output', 'library'], ['SLDS', '[name]'])
    .setIn(['output', 'filename'], '[name]') // [name] will already have ".js" appended
    .setIn(
      ['output', 'jsonpFunction'],
      `webpackJsonpSLDS_${prefix.replace(new RegExp(path.sep, 'g'), '_')}`
    )
    .set(
      'plugins',
      I.List.of(
        new webpack.optimize.CommonsChunkPlugin({
          name: `${prefix}/common.js`,
          minChunks: 2
        })
      )
    );

// chunkedConfigs :: Task Error (I.List WebpackCfg)
const chunkedConfigs = entry.map(entryMap =>
  entryMap.map((entry, prefix) => chunked(prefix).set('entry', entry)).toList()
);

// umd :: WebpackCfg
const umd = webpackConfig
  .set('entry', './scripts/compile/slds.js')
  .setIn(['output', 'library'], 'SLDS')
  .setIn(['output', 'libraryTarget'], 'umd')
  .setIn(['output', 'filename'], `${FOLDERNAME}/slds.umd.js`);

// Task Error (List WebpackCfg)
const configs = chunkedConfigs.map(cfgs =>
  cfgs
    .unshift(umd)
    .filter(
      c =>
        I.Map.isMap(c.get('entry')) ? c.get('entry').count() : c.has('entry')
    )
);

// watch :: (I.Map, Path, WatchOptions) -> Task Error Stats
const watch = (options = {}) =>
  configs.chain(
    cfgs =>
      new Task((reject, resolve) =>
        webpack(cfgs.toJS()).watch(options, (err, stats) => {
          if (err) return reject(err);
          if (stats.hasErrors()) {
            const errors = stats.toJson().errors.join('\n\n');
            console.log(errors);
          }
          resolve(stats);
        })
      )
  );

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

const compileLibs = () =>
  configs
    .map(cfgs =>
      cfgs.map(cfg =>
        cfg.update('plugins', plugins =>
          (plugins || I.List()).push(new Minify())
        )
      )
    )
    .chain(compile);

const writeManifest = () =>
  manifest
    .map(m => JSON.stringify(m, null, 2))
    .chain(contents =>
      writeFile(path.join(paths.dist, 'manifest.json'), contents)
    );

// createLibrary :: Path -> Task Error (List Stats)
const createLibrary = () => compileLibs().chain(writeManifest);

module.exports = {
  configs,
  compile,
  watch,
  createLibrary
};
