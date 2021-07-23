const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    test: /\.scss$/,
    use: [
      'style-loader', // 3. Injects style into DOM
      'css-loader', // 2. Turns CSS to common js
      'sass-loader', // 1. Turns SASS into CSS
    ],
  },
});
