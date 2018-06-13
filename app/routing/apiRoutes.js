/// bring in the data from the friends array ///
var friendsData = require('../data/friends.js');

/// get the user data from the friends array and put in a JSON obj ///
module.exports = function (app) {

    app.get('/api/friends', function (request, response) {
        response.json(friendsData);
    });
};

/// adding a new friend to the friends array ///
app.post('/api/friends', function (request, response) {

/// users new best friend match empty obj ///
    var bestMatch = {
        name: "",
        photo: "",
        scoreDiff: 1000
    };

    var userInput = request.body;
    var userScores = userInput.scores;

    
})