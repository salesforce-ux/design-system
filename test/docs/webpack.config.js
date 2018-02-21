// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../../scripts/compile/entry.docs'),
  output: {
    path: path.join(__dirname, '../../.generated'),
    filename: 'docs.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['es2015', 'react'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ]
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: path.resolve(
              __dirname,
              '../../scripts/compile/mdx-loader.js'
            )
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // This is intentional. A detailed error will be thrown (see bundle.js)
      lodash: ''
    }
  },
  plugins: []
};
