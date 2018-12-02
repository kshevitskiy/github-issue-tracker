const issues = require('./src/data');


const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    main: './index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
  },

  devServer: {
    port: 3000,   
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [
          'style-loader', 
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'
        ]        
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },   

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },

      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },  
        
      { 
        test: /\.ejs$/, 
        use: [
          'ejs-compiled-loader'
        ] 
      }

    ]
  },

  devtool: 'inline-source-map',

  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new CopyWebpackPlugin([
      { 
        from: path.resolve(__dirname, 'src/assets'), 
        to: 'assets' 
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash:8].css',
    }),        
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      title: 'GitHub issue tracker',
      data: issues,
      template: './index.ejs',
      filename: 'index.html',
    })
  ] 
};

module.exports = config;