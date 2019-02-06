const merge = require('webpack-merge');
const common = require('./webpack.common.config');

/** @type {webpack.Configuration} */
const config = {};

module.exports = merge(common, config);
