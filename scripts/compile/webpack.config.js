// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const I = require('immutable');
const path = require('path');
const webpack = require('webpack');

const paths = require('../helpers/paths');

const disableThreadLoaderOnTravis = use =>
  process.env.TRAVIS ? use.loader !== 'thread-loader' : true;

module.exports = I.fromJS({
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workerNodeArgs: ['--max-old-space-size=1024']
            }
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['es2015', 'react'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ].filter(disableThreadLoaderOnTravis)
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          { loader: 'raw-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.mdx$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workerNodeArgs: ['--max-old-space-size=1024']
            }
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['es2015', 'react'],
              plugins: ['transform-object-rest-spread']
            }
          },
          {
            loader: path.resolve(paths.root, 'scripts/compile/mdx-loader.js')
          }
        ].filter(disableThreadLoaderOnTravis)
      }
    ]
  },
  optimization: {},
  output: {
    globalObject: 'this',
    path: paths.dist,
    publicPath: '/assets/scripts/bundle/'
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // This is intentional. A detailed error will be thrown (see bundle.js)
      lodash: ''
    }
  }
});
