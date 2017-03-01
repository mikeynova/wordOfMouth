const express = require('express');
const app = express();
const path = require('path');
const config = require('../webpack.config');
const webpack = require('webpack');
const compiler = webpack(config);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');

const db = require('./db/dbConfig.js');
const tables = require('./db/tables.js');
const signUpUsersRoutes = require('./routes/signUpUsersRoutes.js');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/getSound', signUpUsersRoutes);
app.use('/signUp_users', signUpUsersRoutes);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('3000 is runnning!');
});