var db = require('../db/dbConfig');

module.exports = {
	'/': {
		get: (req, res) => {
			console.log('recieved GET')

				db.query('SELECT * FROM artist', function (err, result) {
			    if (err) throw err;
			    console.log(result, 'in the controller!!!')
			    res.send(result);
			  });
		}
	}

}