const merge = require('webpack-merge');
const common = require('./webpack.common.config');

/** @type {webpack.Configuration} */
const config = {
  module: {
    rules: [
      {
        test: /\.(ico|png|jpg|svg)$/,
        use: 'file-loader'
      }
    ]
  }
};

module.exports = merge(common, config);
