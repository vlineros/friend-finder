// this will have the get and post requests for the api of friends
var potentialFriends = require("../data/friends.js");
var friendFinder = require("../app/findFriend.js");

module.exports = function(expressRef, pathRef) {
  expressRef.get("/api/friends", function(req, res) {
    return res.json(potentialFriends);
  });
  expressRef.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friendFinder(newFriend.scores, potentialFriends);
    // need to add newFriend after checking for a match so it doesn't find itself
    potentialFriends.push(newFriend);
    res.json(newFriend); // <- why don't need to put above the push?
  });
};
