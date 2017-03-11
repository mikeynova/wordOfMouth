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
  module: {
    loaders: [
      { 
        test: /\.(jpe?g|png|gif|svg)$/i, 
        exclude: /node_modules/, 
        loader: 'url-loader?limit=10000!img?progressive=true' 
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0,plugins[]=transform-runtime,plugins[]=transform-decorators-legacy']
      }
    ]
  }
}