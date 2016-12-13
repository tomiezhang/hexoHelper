// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/dev-server','./src/entry.js'],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'http://localhost:8080/static/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']} }
    ]
  },
  devServer:{
    hot:true,
    contentBase:'./src'
  }
};