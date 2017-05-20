var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'mikesdbinstance.cmp7r46qicnc.us-west-2.rds.amazonaws.com',
  port: '3306',
  user     : 'mikesawsuser',
  password : 'awspassword'
});

module.exports = connection;