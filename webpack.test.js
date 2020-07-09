const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.tests.js',
  output: {
    filename: '[name].[contenthash].js',
    path: '.tmp'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};