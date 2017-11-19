const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('../package')

const rootPath = path.resolve(__dirname,  '../')

module.exports = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'dist'),
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(['dist'],{
      root:rootPath
    })
  ]
}