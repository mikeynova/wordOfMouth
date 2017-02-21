var page = require('webpage').create();

page.open('https://soundcloud.com/signin', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
  	page.evaluate(function() {
  		document.getElementsByClassName('textfield__input sc-input sc-input-large')[0].value = 'mikeynova';
      document.getElementsByClassName('textfield__input sc-input sc-input-large')[0].select();
    })
  }
  page.sendEvent('keypress', page.event.key.Enter);
  setTimeout(function() {
    // page.evaluate(function() {
      console.log('Status: ' + status + ', page loaded');
      // document.getElementById('formControl_184').value = "pubnub1"
    // })
    page.render('example.png');
    phantom.exit();
  }, 3000)
 //  page.onLoadFinished = function(status) {
	//   console.log('Status: ' + status + ', page loaded');
   //  page.render('example.png');
	//   phantom.exit();
	// };
});