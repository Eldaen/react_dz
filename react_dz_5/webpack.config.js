const path = require('path')

module.exports = {
  entry: './index.jsx', // входная точка - исходный файл
  output: {
    path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
    publicPath: '/public/',
    filename: 'bundle.js' // название создаваемого файла
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: 'babel-loader' // определяем загрузчик
      },
      {
        test: /\.css$/,
        use: ['style-loader","css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
