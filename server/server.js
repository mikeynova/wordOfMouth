const express = require('express');
const app = express();
const path = require('path');

const db = require('./db/db.js');

const artistRoutes = require('./routes/artistRoutes.js');

app.use(express.static('./client'));
app.use(express.static(__dirname + '/../client'));

app.use('top_artists', artistRoutes);

app.get('*', (req,res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('3000 is runnning!');
});