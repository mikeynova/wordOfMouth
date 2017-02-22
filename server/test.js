const Browser = require('zombie');

// Browser.localhost('https://www.soundcloud.com', 3000);

// 	describe('Signin', function(done) {
// 		it('has a username', function() {
// 			browser.visit('/signin', function() {
// 				console.log(browser.location.href);
// 				browser.fill('username', 'mikeynova')
// 				.pressButton('Continue')
// 				done();
// 			})
// 		})
// 	});

Browser.localhost('https://wwww.reddit.com', 3000)
const browser = new Browser();

return browser.visit('/r/videos', function() {
  console.log(browser.location.href);
});

// 	describe('sigin username', function() {
// 		before(function(done) {
// 			browser
// 				.fill('username', 'mikeynova')
// 				.pressButton('Continue', done)
// 		})
// 		  // it('should be successful', function() {
//     //   browser.assert.success();
//     // });
// 	})

// describe('homepage', function(){
//   it('should respond to GET',function(){
//     superagent
//       .get('http://localhost:'+ 3000)
//       .end(function(res){
//         expect(res.status).to.equal(200);
//     })
//   })
// })

// const expect = require('expect.js');
// const Browser = require('zombie');
// const browser = new Browser();

// describe('Loads pages', function(){
//   it('Google.com', function(done){
// 	    browser.visit("http://www.soundcloud.com/signin", function() {
// 			  console.log(browser);
//         done();
//       });
//   });
// });