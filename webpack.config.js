var webpack = require("webpack");

var optUglify = { compress: { warnings: false } };

module.exports = {
  entry: './build/main.js',
  output: { path: 'build', filename: '_bundle.js' },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(optUglify)
  ]
};
