var request = require('request');

var options = {
    url: 'http://138.197.184.18:8080/speakerList',
    headers: {
      'X-organisation': 'test'
    }
  };
request(options, function (error, response, body) {
    console.log(body);
});