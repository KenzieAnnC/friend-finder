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
        var matchPic = '';
        var friendScoreDiff = 1000;

        for (var i = 0; i < friendsData.length; i++) {

            var diffArr = [];
            for (var j = 0; j < userScores.length; j++) {

                diffArr.push(scoreDiff += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScores[j])));
            }
            var scoreDiff = 0;
            scoreDiff = diffArr.reduce((a, b) => a + b, 0);
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


