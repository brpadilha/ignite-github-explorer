const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname,'src','index.jsx'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname,'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public','index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, //will convert if the file is jsx
        exclude: /node_modules/, //will ignore all the files from node modules
        use: 'babel-loader' //will use babel-loader to transpile every jsx file
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
}