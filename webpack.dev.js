const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'env.backendUrl': JSON.stringify('http://localhost:8080/')
    })
  ]
});

