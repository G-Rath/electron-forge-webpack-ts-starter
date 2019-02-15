const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * The webpack configuration settings specific to the `renderer` compiler.
 *
 * @type {webpack.Configuration}
 */
const config = {
  plugins: [
    new CopyWebpackPlugin(
      [
        { from: path.join('src', 'assets'), to: 'assets' }
      ],
      {
        ignore: [
          '.gitkeep'
        ]
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.(ico|png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '..',
              context: 'src'
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(common, config);
