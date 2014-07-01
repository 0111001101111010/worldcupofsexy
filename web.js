// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = parseInt(process.env.PORT, 10) || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
