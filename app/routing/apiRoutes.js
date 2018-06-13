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

    /// extract user's input scores ///
    var userInput = request.body;
    var userScores = userInput.scores;

    /// set an empty array for the scores difference of the new user and other users in the array ///
    var scoreDiffArr = [];

    /// for each friend the object array, extract the score values & parse them ///
    friendsData.forEach(obj => {
        var scoreDiff = 0;
        obj.scores.forEach((item, index) => {
            var friendScore = parseInt(item);
            userScores = parseInt(userScores[index]);

            /// get the score difference by taking the absolute value of the resulting number ///
            scoreDiff += Math.abs(friendScore - userScores);

            
        });

        /// push the difference between scores (scoreDiff) into the score difference array ///
        scoreDiffArr.push(scoreDiff);
    });
    /// returning the lowest score 
    var newFriend = friendsData[scoreDiffArr.indexOf(Math.min(...scoreDiffArr))]

    /// push the new data ///
    friendsData.push(userInput);

    response.json(newFriend);

});