/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs';

import _ from 'lodash';
import minimist from 'minimist';
import webpack from 'webpack';

import { getDefaultEnvVars } from 'scripts/helpers/env';

const eslintExclude = new RegExp([
  __PATHS__.node_modules,
  __PATHS__.generated,
  __PATHS__.tmp
].map(_.escapeRegExp).join('|'));

/**
 * Cleanup webpack error messages and then log them to the console
 *
 * @param {object} stats
 * @returns {object}
 */
function logStats (stats) {
  stats = stats.toJson({
    source: false,
    timings: true
  });
  // fs.writeFileSync('./webpack.stats.json', JSON.stringify(stats, null, 2))
  if (stats.errors.length) {
    stats.errors = stats.errors.map(function(error) {
      return _.last(error.split('!'));
    });
    stats.errors.forEach(function(error) {
      console.log(error);
    });
  }
  return stats;
}

/**
 * The webpack configuration
 */
export function getConfig (options) {
  options = _.defaults({}, options, {
    prod: false
  });
  const config = {
    context: __dirname,
    entry: {
      // Should not be directly imported
      site: path.resolve('app_modules/site/browser/site'),
      // TODO: Figure out how to use CommonsChunkPlugin and bundle-loader together
      common: [
        'app_modules/site/components/cta-link',
        'app_modules/site/components/page/anchor',
        'app_modules/site/components/page/body',
        'app_modules/site/components/page/component',
        'app_modules/site/components/sticky',
        'app_modules/site/navigation/navigation',
        'app_modules/site/navigation/navigation-utils',
        'app_modules/site/navigation/sitemap',
        'app_modules/site/navigation/sitemap-utils',
        'app_modules/site/shared',
        'app_modules/site/util/analytics'
      ],
      vendor: [
        'app_modules/site/vendor/prism',
        'classnames',
        'immutable',
        'js-beautify',
        'lodash',
        'react',
        'react-dom',
        'react-dom/server',
        'react-lorem-component',
        'react-router',
        'tinycolor2'
      ]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__PATHS__.www, 'assets/scripts'),
      publicPath: '/assets/scripts/'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: '{ compact: false }',
          exclude: /node_modules/
        },
        {
          test: /\.jsx?$/,
          loader: path.resolve('app_modules/util/license-loader/index.js'),
          exclude: /node_modules/
        },
        {
          test: /\.jsx?$/,
          exclude: eslintExclude,
          loader: 'eslint-loader'
        }
      ],
      noParse: [
        /\.generated/,
        /immutable\/immutable\.js/,
        /lodash\/index\.js/,
        /react\/dist\/react\.js/
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      root: __PATHS__.root,
      alias: {
        'immutable$': path.resolve(__PATHS__.node_modules, 'immutable/dist/immutable.js'),
        'react$': path.resolve(__PATHS__.node_modules, 'react/dist/react.js'),
        'react-dom$': path.resolve(__PATHS__.node_modules, 'react-dom/dist/react-dom.js'),
        'react-dom/server$': path.resolve(__PATHS__.node_modules, 'react-dom/dist/react-dom-server.js')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': _(process.env)
          .pick(_.keys(getDefaultEnvVars()))
          .mapValues(value => `"${value}"`)
          .value()
      })
    ],
    cache: {},
    eslint: {
      configFile: path.resolve(__PATHS__.root, '.eslintrc')
    }
  };
  // Common chunks
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      minChunks: Infinity
    })
  );
  // Uglify
  if (options.prod) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  }
  return config;
}

/**
 * Compile/watch webpack
 *
 * @param {function} callback
 */
export function watch (options, callback) {
  console.log('Compiling Webpack');
  const config = getConfig();
  const compiler = webpack(config);
  compiler.watch(100, (err, stats) => {
    stats = logStats(stats);
    callback(err, stats);
  });
}

/**
 * Compile webpack
 *
 * @param {function} callback
 */
export function compile (options, callback) {
  console.log('Compiling Webpack');
  const config = getConfig(options);
  const compiler = webpack(config);
  compiler.run((err, stats) => {
    logStats(stats);
    callback(err, stats);
  });
}
