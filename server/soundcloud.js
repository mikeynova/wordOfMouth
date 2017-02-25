var page = require('webpage').create();
var network = {}
var flag = true;

page.onResourceRequested = function(request) {
  var found = request.url.search('likes');
  if(found !== -1 && found < 50 && request.url.length > 40 && flag) {
    flag = false;
    network.likesURL = request.url;
  }
};

page.open('https://soundcloud.com/' + username + '/likes', function(status) {
    phantom.exit();
});
