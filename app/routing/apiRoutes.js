var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

/// bring in the data from the friends array ///
var friendsData = require('../data/friends.js');

/// get the user data from the friends array and put in a JSON obj ///
module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friendsData);

    });

    
    
    /// adding a new friend to the friends array ///
    app.post("/api/friends", function (request, response) {

        var userInput = request.body;
        var userScores = userInput.scores;

        var matchName = '';
        var matchImage = '';
        var friendScoreDiff = 1000;

        for (var i = 0; i < friendsData.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScores.length; j++) {
                scoreDiff += Math.abs(friendsData[i].scores[j] - userScores[j]);
                console.log(scoreDiff);
            }
            if (scoreDiff < friendScoreDiff) {
                friendScoreDiff = scoreDiff;
                matchName = friendsData[i].name;
                matchPic = friendsData[i].photo;
            }

            friendsData.push(userInput);
            response.json({ status: 'OK', matchName: matchName, matchPic: matchPic });
        }
    });

};


