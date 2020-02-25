const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const addClasses = require('rehype-add-classes');

const paths = require('../scripts/helpers/paths');
const tags = require('../shared/storybook/docs/tags');

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, '../ui'),
        path.resolve(__dirname, '../.storybook'),
        path.resolve(__dirname, '../shared'),
        path.resolve(__dirname, '../assets')
      ],
      use: [
        {
          loader: path.resolve(
            __dirname,
            '../scripts/compile/lwc-style-loader.js'
          )
        },
        {
          loader: 'css-loader',
          options: { importLoaders: 2 }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: path.resolve(__dirname, '../')
            }
          }
        },
        {
          loader: 'resolve-url-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true, outputStyle: 'compressed' }
        },
        // Reads Sass vars from files or inlined in the options property
        // needed to reset the asset paths for webpack to load them, as we
        // assume we're loading from the assets folder with a relative path
        // from the compile css monolith to the assets, like fonts
        {
          loader: '@epegzz/sass-vars-loader',
          options: {
            syntax: 'scss',
            files: [
              path.resolve(
                __dirname,
                '../shared/storybook/scss/framework/config.scss'
              )
            ]
          }
        }
      ]
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, '../ui'),
      use: ['raw-loader']
    },
    {
      test: /\.mdx$/,
      include: [path.resolve(__dirname, '../ui')],
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: '@mdx-js/loader',
          options: {
            rehypePlugins: [[addClasses, { [tags]: 'doc' }]]
          }
        }
      ]
    }
  );
  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: paths.icons,
        to: 'assets/icons'
      },
      {
        from: paths.assets,
        to: 'assets'
      }
    ])
  );
  return config;
};
