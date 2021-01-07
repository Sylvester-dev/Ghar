
var path = require('path');


module.exports = {
  entry: './src/index.js',
  node: { global: true, fs: 'empty' },
  mode: "development",
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    //libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  }
}; 