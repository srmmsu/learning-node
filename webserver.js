var express = require('express'); // fetches the 'express' module
var app = express(); // Instantiates the module

// Declare a function 'handleReq' for handling HTTP request.
// Argument 'req' represents an HTTP request
// Argument 'res' represents an HTTP response
var handleReq = function(req, res){ 
  res.send('Hello World'); // 'send' is an operation of 'res' object for writing a response string.
}

// registers the 'handleReq' action to the route '/'
app.get('/', handleReq);




app.get('/about', function(req, res){
  res.send('Web server that should lead to Gujarati OCR webservice.');
});

app.get('/add', function(req, res){
	console.log('add requested');
  	res.send(req.query.a + req.query.b);
});

app.get('/currenttime', function(req, res){
	console.log('time requested');
  	res.send(new Date());
});

app.get('/greet/:name', function(req, res){
	console.log('greet requested');
  	res.send('Hi ' + req.params.name);
});

// Start listening for incoming requests on port 3000
app.listen(3000);

