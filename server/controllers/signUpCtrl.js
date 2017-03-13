const SignUp = require('../models/signUpModel.js');
const _ = require('underscore');

module.exports = {
	'/': {
		post: (req, res) => {
			SignUp.checkUser(req.body)
				.then((emails) => {
					var matches = _.filter(emails, (user) => {
						return user.email === req.body.email
					})
					if(matches) {
						res.send(matches)
					} else {
							SignUp.newUser(req.body)
								.then((user) => {
									console.log('added new user from ctrl: ', user);
									res.send(user);
								})
					}
				})
		}
	}
}