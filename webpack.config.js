const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Always enabled plugins
const plugs = [
  new ExtractTextPlugin('_bundle.css')
];

// Production only plugins
const prod = [
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
];

module.exports = {
  context: `${__dirname}/src`,
  entry: './main.js',
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: '_bundle.js'
  },
  devtool: 'source-map',
  plugins: process.env.NODE_ENV !== 'production' ? plugs : plugs.concat(prod),
  module: {
    loaders: [
      { test: /\.png$/, loader: 'file' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus') },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-3', 'react'] }
      }
    ]
  }
};
