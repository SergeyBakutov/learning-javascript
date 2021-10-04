const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devServer: {
    static: './dist',
    port: 4200
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}