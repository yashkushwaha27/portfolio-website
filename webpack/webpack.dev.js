const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      base: {
        href: 'http://localhost:1000',
        target: '_blank',
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
});
