// Karma configuration
// Generated on Tue Mar 24 2015 16:05:39 GMT-0400 (EDT)

var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

module.exports = function(config) {
  var c = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __dirname,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/sinon/pkg/sinon.js',
      'ui/**/*.spec.+(js|jsx)',
      'test/browser/site/**/*.+(js|jsx)',
      'test/browser/accessibility/a11y.js',
      'test/browser/accessibility/components.jsx'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'ui/**/*.+(js|jsx)': ['webpack'],
      'test/browser/**/*.+(js|jsx)': ['webpack']
    },

    plugins: [
      'karma-chai',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-spec-reporter',
      'karma-webpack'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],
    specReporter: {
      suppressPassed: true,
      suppressSkipped: true
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    customLaunchers: {
      ChromeTravis: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    webpack: {
      resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname
      },
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        }]
      },

      plugins: [
        new webpack.DefinePlugin({
          'process.env': _({
            'DEFAULT_USER_TYPE': 'external'
          }).mapValues(function (value) { return '"' + value + '"'; }).value()
        })
      ]
    },

    webpackMiddleware: {
      noInfo: true
    }

  };

  if (process.env.TRAVIS) {
    c.browsers = ['ChromeTravis'];
  }

  config.set(c);

};
