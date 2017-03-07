const Soundcloud = require('../models/soundcloudModel.js');

module.exports = {
	'/': {
		get: (req, res) => {
			console.log('recieved "/getSound" GET')
			// db.query('SELECT * FROM artist', function (err, result) {
		 //    if(err) throw err;
			//     console.log(result, 'in the controller!!!')
			//     res.send(result);
		 //  });
			Soundcloud.getLikes()
				.then((url) => {
					console.log('url after getLikes resolves promise: ', url);
					res.send(url);
				})
				.catch((err) => {
					console.log('Error inside getLikes ', err);
					res.end('Error inside getLikes ', err);
				});
		},
		post: (req, res) => {
		}
	}
}