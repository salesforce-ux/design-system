// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const I = require('immutable');
const path = require('path');
const paths = require('../helpers/paths');

module.exports = I.fromJS({
  output: {
    path: paths.dist,
    publicPath: '/assets/scripts/bundle/'
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
            loader: 'style-loader/useable',
            options: { insertInto: 'iframe[data-slds-doc]' }
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
            loader: './scripts/compile/mdx-post-loader'
          },
          {
            loader: 'mdx-loader',
            options: {
              unwrapped: false
            }
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
});
