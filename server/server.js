const express = require('express');
const app = express();
const path = require('path');
const config = require('../webpack.config');
const webpack = require('webpack');
const compiler = webpack(config);

const db = require('./db/dbConfig.js');
const tables = require('./db/tables.js');
const artistRoutes = require('./routes/artistRoutes.js');

app.use('/top_artists', artistRoutes);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('8000 is runnning!');
});