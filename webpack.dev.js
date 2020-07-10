const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
    mode: 'development',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    /*   sourceMapFilename: '[name].bundle.js.map' */
    },
    devServer: {
      compress: true
    },
   /*  devtool: 'source-map', */
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, //3. Extract css into files
            //'style-loader', //3. Inject styles into DOM
            'css-loader', //2. Turns css into commonjs
            'sass-loader' //1. Turns sass into css
          ]
        }
      ]
    }
  });