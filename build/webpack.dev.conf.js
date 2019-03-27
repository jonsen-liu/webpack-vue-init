const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    open: true
  },
  module: {
    rules: [
      {
        test: /\.l?(e|c)ss$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
