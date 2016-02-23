var webpack = require('webpack');

var plugins = process.env.NODE_ENV !== 'production' ? [] : [
  // Production only plugins
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
];

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'build',
    publicPath: 'build/',
    filename: '_bundle.js'
  },
  devtool: 'source-map',
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-3', 'react'] }
      }
    ]
  }
};
