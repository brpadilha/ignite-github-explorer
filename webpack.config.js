const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

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
    hot:true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public','index.html')
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx$/, //will convert if the file is jsx
        exclude: /node_modules/, //will ignore all the files from node modules
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        } //will use babel-loader to transpile every jsx file
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
}