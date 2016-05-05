/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import fs from 'fs';
import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack';

import { WebpackDefineKeys } from 'scripts/helpers/env';

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
  options = _.defaults({}, options);

  const config = {
    context: __PATHS__.root,
    entry: {
      site: './site/assets/scripts/main.js'
    },
    devtool: 'source-map',
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
          query: {
            compact: false,
            cacheDirectory: true
          },
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          loader: path.resolve('app_modules/util/license-loader/index.js'),
          exclude: /node_modules/
        }
      ],
      noParse: [
        /\.generated/
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      root: __PATHS__.root
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': _(process.env)
          .pick(WebpackDefineKeys)
          .mapValues(value => `"${value}"`)
          .value()
      })
    ],
    cache: {}
  };
  // Common chunks
  /*config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      minChunks: Infinity
    })
  );*/
  // Uglify
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  return config;
}

gulp.task('webpack', done => {
  const config = getConfig();
  const compiler = webpack(config);
  compiler.run((err, stats) => {
    logStats(stats);
    done(err, stats);
  });
});
