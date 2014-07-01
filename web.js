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
$.getJSON('worldcup.json', function(worldcupdata) {
    console.log(worldcupdata);
})

app.listen(port, function() {
  console.log("Listening on " + port);
});


for(i in worldcupdata)
{
    //get all world cup player images by their id in the JSON data and add the
    //image URL as an extra field in each player's JSON
    var imgURL = "http://img.fifa.com/images/fwc/2014/players/prt-3/" + worldcupdata[i].idplayer + ".png";
    worldcupdata[i].imgURL = imgURL;

    //add field for whether the player won or lost the rating round
    //initially set to an empty string
    var status = "";
    worldcupdata[i].winloss = status;

    //initialize each player's score to 0
    worldcupdata[i].score = 0;
}
