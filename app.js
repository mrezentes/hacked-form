var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));

app.post('/submit', function (request, response) {
  console.log("received data from payment form")
	var body = ""
	request.on('data', function (chunk) {
	    body += chunk;
	  });
	request.on('end', function () {
		console.log('Server received data: ' + body);
	})
    response.end("Data accepted");
});

app.listen(8080, function () {
  console.log('payment form app listening on port 8080!');
});

