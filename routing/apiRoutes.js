// this will have the get and post requests for the api of friends
var potentialFriends = require("../data/friends.js");
var friendFinder = require("../app/findFriend.js");

module.exports = function(expressRef, pathRef) {
  expressRef.get("/api/friends", function(req, res) {
    return res.json(potentialFriends);
  });
  expressRef.post("/api/friends", function(req, res) {
    var userInfo = req.body;
    console.log(userInfo);
    var newFriend = friendFinder(userInfo.scores, potentialFriends);
    // need to add newFriend after checking for a match so it doesn't find itself
    potentialFriends.push(userInfo);
    res.json(newFriend);
  });
};
