var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Always enabled plugins
var plugs = [
  new ExtractTextPlugin('_bundle.css')
];

// Production only plugins
var prod = [
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
];

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'build',
    publicPath: '/build/',
    filename: '_bundle.js'
  },
  devtool: 'source-map',
  plugins: process.env.NODE_ENV !== 'production' ? plugs : plugs.concat(prod),
  module: {
    loaders: [
      { test: /\.png$/, loader: 'file' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-3', 'react'] }
      }
    ]
  }
};
