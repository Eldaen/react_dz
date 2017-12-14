module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  },
  entry: './App.jsx',
  output: {
    filename: 'build.js'
  }
}
