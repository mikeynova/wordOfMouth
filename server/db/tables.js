var connection = require('./dbConfig');
var db = 'Users';

var table = ('CREATE TABLE IF NOT EXISTS Artist (id INT(100) NOT NULL AUTO_INCREMENT, first VARCHAR(30), last VARCHAR(30), email VARCHAR(40), password VARCHAR(100), PRIMARY KEY(id))');

connection.query('CREATE DATABASE IF NOT EXISTS ??', db, function(err, results) {
  if (err) {
    console.log('error in creating database', err);
    return;
  }

  console.log('created a new database');

  connection.changeUser({
    database : db
  }, function(err) {
    if (err) {
      console.log('error in changing database', err);
      return;
    }

    connection.query(table, function(err) {
      if (err) {
        console.log('error in creating tables', err);
        return;
      }

      console.log('created a new table');
    });
  });
})