const db = require('../db/dbConfig');

const SignUp = module.exports;

SignUp.newUser = (user) => {
	var id = 0;
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO User VALUES ("' + id + '","' + user.first + '","' + user.last + '","' + user.email + '","' + user.password + '")', function(err, result) {
			if(err) throw err;
				resolve(result);
		})
	})
}