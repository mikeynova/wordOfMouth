const controllers = require('../controllers/artistCtrl.js');
const router = require('express').Router();

for (var route in controllers) {
	router.route(route)
		.get(controllers[route].get)
}

module.exports = router;