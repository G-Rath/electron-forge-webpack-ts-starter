const merge = require('webpack-merge');
const common = require('./webpack.common.config');

/**
 * The webpack configuration settings specific to the `renderer` compiler.
 *
 * @type {webpack.Configuration}
 */
const config = {
  module: {
    rules: [
      {
        test: /\.(ico|png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src'
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(common, config);
