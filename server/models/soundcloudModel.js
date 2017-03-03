const db = require('../db/dbConfig');

const Soundcloud = module.exports;

// Soundcloud.storeClientID = (req, res) => {

// };

Soundcloud.getLikes = (req, res) => {
	const phantom = require('phantom'); 
	let result;
	return (async function() {
		let flag = true;
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on("onResourceRequested", function(requestData) {
      let found = requestData.url.search('likes');
			  if(found !== -1 && found < 50 && requestData.url.length > 40 && flag) {
			    flag = false;
				  result = requestData.url;
			  }
    });
    const status = await page.open('https://soundcloud.com/mikeynova/likes');
    const content = await page.property('content');
    await instance.exit();
    return result;
	}());
};