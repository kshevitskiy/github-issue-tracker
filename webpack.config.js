const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// .env constants
const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    polyfill: 'babel-polyfill',
    app: ['./app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,   //Tell dev-server which port to run
    open: true,   // to open the local server in browser
    contentBase: path.resolve(__dirname, 'dist'), //serve from 'dist' folder
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('css/styles.css'),
    new HtmlWebpackPlugin({
      title: 'GitHub issue tracker',
      template: 'index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })    
  ]
};

module.exports = config;