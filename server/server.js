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
const soundcloudRoutes = require('./routes/soundcloudRoutes.js');
const signUpRoutes = require('./routes/signUpRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/getSound', soundcloudRoutes);
app.use('/signUp', signUpRoutes);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/here', () => {
	console.log('say something')
})

const port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('8000 is runnning!');
});