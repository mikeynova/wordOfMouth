const db = require('../db/dbConfig');

const SignUp = module.exports;

SignUp.newUser = (user) => {
var id = 0;
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO User VALUES ("' + id + '","' + user.first + '","' + user.email + '","' + user.password + '")', function(err, result) {
			if(err) throw err;
				resolve(result);
		})
	})
}

SignUp.checkUser = (user) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT email FROM User', function(err, result) {
			resolve(result)
		})
	})
}