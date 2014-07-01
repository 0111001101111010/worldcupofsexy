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

//get world cup players JSON data from file and parse into object
$.getJSON('worldcup.json', function(response) {
    worldcupdata = response;
})

app.listen(port, function() {
  console.log("Listening on " + port);
});

var i; 
var NUM_PLAYERS = 731;

//get all world cup player images by their id in the JSON data and add the
//image URL as an extra field in each player's JSON
for(i = 0; i <= NUM_PLAYERS; i++)
{
    var imgURL = "http://img.fifa.com/images/fwc/2014/players/prt-3/" + worldcupdata.idplayer + ".png";
    worldcupdata.imgURL = imgURL;

}
