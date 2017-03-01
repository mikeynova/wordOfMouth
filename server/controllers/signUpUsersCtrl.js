var db = require('../db/dbConfig');

module.exports = {
	'/': {
		get: (req, res) => {
			console.log('recieved "/" GET')
			// db.query('SELECT * FROM artist', function (err, result) {
		 //    if(err) throw err;
			//     console.log(result, 'in the controller!!!')
			//     res.send(result);
		 //  });
			const phantom = require('phantom'); 
			(async function() {
					var flag = true;
			    const instance = await phantom.create();
			    const page = await instance.createPage();
			    await page.on("onResourceRequested", function(requestData) {
		        let found = requestData.url.search('likes');
						  if(found !== -1 && found < 50 && requestData.url.length > 40 && flag) {
						    flag = false;
						    res.send(requestData.url);
						  }
			    });
			 
			    const status = await page.open('https://soundcloud.com/mikeynova/likes');
			    // console.log(status);
			 
			    const content = await page.property('content');
			    // console.log(content);
			 
			    await instance.exit();
			}());
		},
		post: (req, res) => {
			// var id = 0;
			// db.query('INSERT INTO Artist VALUES ("' + id + '","' + req.body.first + '","' + req.body.last + '","' + req.body.email + '","' + req.body.password + '")', function(err, result) {
			// 	if(err) throw err;
			// 		console.log(result, 'result!');
			// });
		}
	}
}