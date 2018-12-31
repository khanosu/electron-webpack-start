const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mainConfig = {
  entry: "./main.js",
  target: 'electron-main',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
    {
      test: /\.m?js$/,
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
  node: {
    __dirname: false,
    __filename: false
  },
};

const rendererConfig = {
  entry: "./src/renderer.js",
  target: 'electron-renderer', 
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'renderer.js'
  },
 module: {
    rules: [
    {
      test: /\.m?js$/,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
};

module.exports = [ mainConfig, rendererConfig ];