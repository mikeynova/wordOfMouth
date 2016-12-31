const express = require('express');
const app = express();
const path = require('path');
const config = require('../webpack.config');
const webpack = require('webpack');
const compiler = webpack(config);
// const webpackMiddleware = require("webpack-dev-middleware");

const db = require('./db/dbConfig.js');
const tables = require('./db/tables.js');

const artistRoutes = require('./routes/artistRoutes.js');

// app.use(express.static('./client'));
// app.use(express.static(__dirname + '/../client'));

app.use('/top_artists', artistRoutes);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', (req,res) => {
//   res.sendFile(path.resolve('client', 'index.html'));
// });

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('8000 is runnning!');
});

// var path = require('path');
// var express = require('express');

// var app = express();



// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(3000, function(err) {
//   if (err) {
//     return console.error(err);
//   }

//   console.log('Listening at http://localhost:3000/');
// })