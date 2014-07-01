// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('index.html');
  
});

var port = parseInt(process.env.PORT, 10) || 5000;

var worldcupdata;

$.getJSON('worldcup.json', function(response) {
    worldcupdata = response;
})

app.listen(port, function() {
  console.log("Listening on " + port);
});

var i; 

for(i = 0; i <= 731; i++)
{
    var imgURL = "http://img.fifa.com/images/fwc/2014/players/prt-3/" + worldcupdata.idplayer + ".png";
    worldcupdata.imgURL = imgURL;

}
