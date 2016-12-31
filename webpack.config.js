var webpack = require('webpack');
var path = require('path');
const { resolve } = require('path');
module.exports = {
  entry: [
  'webpack-hot-middleware/client?http://0.0.0.0:8000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './client/index.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname + 'dist'),
    filename: "dist/bundle.js",
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  // devServer: {
  //   hot: true,
  //   // enable HMR on the server

  //   contentBase: resolve(__dirname, 'dist'),
  //   // match the output path

  //   publicPath: '/'
  //   // match the output `publicPath`
  // },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        // loaders: ["react-hot", "babel-loader"],
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,plugins[]=transform-runtime'] 
        // query: { presets: ['es2015', 'react'] }
      }
    ]
  }
}