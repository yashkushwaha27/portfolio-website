const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../build'),
    },
    port: 1000,
    compress: true,
    allowedHosts: 'all',
    historyApiFallback: true,
  },
});
