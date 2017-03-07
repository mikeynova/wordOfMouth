const SignUp = require('../models/signUpModel.js');

module.exports = {
	'/': {
		post: (req, res) => {
			SignUp.newUser(req.body)
				.then((user) => {
					console.log('added new user from ctrl: ', user);
					res.send(user);
				})
		}
	}
}