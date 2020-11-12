const path = require('path');
const paths = require('../scripts/helpers/paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const addClasses = require('rehype-add-classes');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const tags = [
  'p',
  'div',
  'a',
  'em',
  'strong',
  'ol',
  'ul',
  'li',
  'code',
  'blockquote',
  'pre',
  'tr',
  'td',
  'th',
  'table',
  'thead',
  'tbody',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
];
const tagsString = tags.reduce((tags, tag) => `${tags},${tag}`);

const commonRules = [
  {
    loader: 'css-loader',
    options: { importLoaders: 2, url: false }
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      sourceMap: true,
      plugins: (loader) => {
        // if requesting the SLDS version for IE11/Edge Legacy
        if (process.env.STORYBOOK_SLDS_VERSION === 'legacy') {
          return [
            require('@salesforce-ux/postcss-annotations-parser'),
            require('@salesforce-ux/postcss-css-variable-value')
          ];
        }

        return [require('autoprefixer')];
      }
    }
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: { sourceMap: true, outputStyle: 'compressed' }
    }
  }
];

const extractRules = ['extract-loader'].concat(commonRules);

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    // Sass file import/require rules
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, '../ui'),
        path.resolve(__dirname, '../.storybook'),
        path.resolve(__dirname, '../shared'),
        path.resolve(__dirname, '../assets')
      ],
      oneOf: [
        // touch demo
        {
          test: /touch-demo\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:
                  'assets/__internal/styles/salesforce-lightning-design-system_touch-demo.min.css'
              }
            }
          ].concat(extractRules)
        },
        // storybook styles
        {
          test: /scss\/ui\/index\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'slds-storybook.build.css'
              }
            }
          ].concat(extractRules)
        },
        // SLDS stylesheet
        {
          test: /\/ui\/index\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/styles/salesforce-lightning-design-system.min.css'
              }
            }
          ].concat(extractRules)
        },
        // touch stylesheet (with media/feature query)
        {
          test: /\/ui\/touch\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:
                  'assets/styles/salesforce-lightning-design-system_touch.min.css'
              }
            }
          ].concat(extractRules)
        },
        // everything else
        {
          use: [MiniCssExtractPlugin.loader].concat(commonRules)
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
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: '@mdx-js/loader',
          options: {
            rehypePlugins: [[addClasses, { [tagsString]: 'doc' }]]
          }
        }
      ]
    }
  );

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name]-slds.build.css',
      chunkFilename: '[name].build.css'
    })
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
