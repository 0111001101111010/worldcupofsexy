var worldcupdata;
var NUM_PLAYERS = 731;

//get world cup players JSON data from file and parse into object
$.getJSON('/data/worldcup.json', function(worldcupdata) {
    console.log(worldcupdata);
})


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

//select random player out of all the players
function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//generate list of randomly selected players
function getPlayers()
{
    var whichPlayers = new Array();
    for (i = 0; i <32; i++) {
        whichPlayers[i] = randomIntFromInterval(0, NUM_PLAYERS);
    }
    return whichPlayers;
}
