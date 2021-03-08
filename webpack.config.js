const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/client/index'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}
