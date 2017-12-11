module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  entry: './react_dz_2/index.js',
  output: {
    filename: './react_dz_2/build.js',
    library: 'date'
  }
}
