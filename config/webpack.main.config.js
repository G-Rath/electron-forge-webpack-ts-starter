const merge = require('webpack-merge');
const common = require('./webpack.common.config');

/**
 * The webpack configuration settings specific to the `main` compiler.
 *
 * @type {webpack.Configuration}
 */
const config = {
  entry: './src/main/index.ts'
};

module.exports = merge(common, config);
