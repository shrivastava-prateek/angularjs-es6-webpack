const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
  //mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].[contenthash].js.map'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new webpack.HashedModuleIdsPlugin() // so that file hashes don't change unexpectedly
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    //runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      /*      cacheGroups: {
             vendor: {
               test: /[\\/]node_modules[\\/]/,
               name(module) {
                 // get the name. E.g. node_modules/packageName/not/this/part.js
                 // or node_modules/packageName
                 const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
     
                 // npm package names are URL-safe, but some servers don't like @ symbols
                 return `npm.${packageName.replace('@', '')}`;
               },
             },
           } */
    }
  }
};