const path = require('path');
const docs = require('./docs-list');

const basePath = path.resolve(__dirname, '../../../');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    babelrc: false,
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-object-rest-spread']
  }
};

const config = {
  entry: docs,
  context: basePath,
  mode: 'development',
  // devtool: 'inline-source-map',

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve(__dirname, '../../../.dist/__internal/docs')
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    classnames: 'classnames'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 3,
          reuseExistingChunk: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [basePath],
        exclude: /node_modules/,
        use: [babelLoader]
      },

      {
        test: /\.mdx$/,
        include: [basePath],
        exclude: /node_modules/,
        use: [babelLoader, '@mdx-js/loader']
      }
    ]
  }
};

// environment-based adjustments
// if (NODE_ENV === 'production') {
//   config.mode = 'production';
// }

module.exports = config;
