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
  entry: './Layout.jsx',
  output: {
    filename: 'build.js'
  }
}
