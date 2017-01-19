var db = require('../db/dbConfig');

module.exports = {
	'/': {
		get: (req, res) => {
			console.log('recieved GET')
			db.query('SELECT * FROM artist', function (err, result) {
		    if(err) throw err;
			    console.log(result, 'in the controller!!!')
			    res.send(result);
		  });
		},
		post: (req, res) => {
			var id = 0;
			db.query('INSERT INTO Artist VALUES ("' + id + '","' + req.body.first + '","' + req.body.last + '","' + req.body.email + '","' + req.body.password + '")', function(err, result) {
				if(err) throw err;
					console.log(result, 'result!');
			});
		}
	}

}