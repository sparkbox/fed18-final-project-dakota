const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: PRODUCTION ? false : 'eval-source-map',
  mode: PRODUCTION ? 'production' : 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'docs/js'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new MinifyPlugin()
  ]
};
