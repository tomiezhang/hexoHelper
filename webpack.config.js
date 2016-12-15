const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const dev = 'development'
module.exports = {
  entry: {
        main: './src/main'
    },
  output: {
    path: path.resolve(__dirname, dev),
    publicPath: '/',
    filename: 'static/[name].js',
    chunkFilename: 'static/[name].chunk.js'
  },
   module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!sass'
                )
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10240,
                    name: 'static/[name].[ext]'
                }
            }
        ]
    },
     // 扩展名省略,别名设置
  resolve: {
        extensions: ['', '.js','.scss']
    },
  plugins: [
        new ExtractTextPlugin("static/[name].css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'static/vendors.js'),
        new HtmlWebpackPlugin({ // 构建html文件
          // favicon: './favicon.ico',
          filename: './index.html',
          template: './src/template/index.html',
          inject: 'body'
        })
    ],
    devServer:{
        progress: true,
        compress: true,
        port: 8080
    }
};