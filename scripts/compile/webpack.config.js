// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const I = require('immutable');

module.exports = I.fromJS({
  output: {
    publicPath: 'assets/scripts/bundle/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          'es2015',
          'react'
        ],
        plugins: [
          'styled-jsx/babel',
          'transform-object-rest-spread',
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
})
