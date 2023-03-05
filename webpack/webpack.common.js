const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const absoluteFolders = [
  'assets',
  'components',
  'constants',
  'pages',
  'routes',
  'services',
  'utils',
  'theme',
  'hooks',
];

/**
 * Method to alias for supporting absolute folder paths
 * @param {*} subdir
 * @returns
 */
const getAlias = () => {
  const alias = {};
  absoluteFolders.forEach(
    (name) => (alias[`@${name}`] = path.join(__dirname, '../src', name))
  );
  return alias;
};

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: 'auto',
    clean: true,
  },
  // pass all js, jsx, ts, tsx, json files through Babel
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: getAlias(),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/env', '@babel/preset-react'] },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource', // file-loader
      },
    ],
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
};
