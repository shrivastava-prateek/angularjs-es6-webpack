const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = merge(common, {
    mode: 'development',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    /*   sourceMapFilename: '[name].bundle.js.map' */
    },
    devServer: {
      compress: true,
      proxy:{
        '/**':'http://192.168.15.188:5555'
      }
    },
   /*  devtool: 'source-map', */
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  });