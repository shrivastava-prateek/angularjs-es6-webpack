const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
//const ZopfliPlugin = require('zopfli-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
 /*    sourceMapFilename: '[name].[contentHash].bundle.js.map' */
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: false,
    minimizer: [
      new OptimizeCssAssetsPlugin({ cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true,
        }
      }
    }) ,
      new TerserPlugin({
        sourceMap: true
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    //new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          'css-loader', //2. Turns css into commonjs
          'sass-loader' //1. Turns sass into css
        ]
      }
    ]
  }
});