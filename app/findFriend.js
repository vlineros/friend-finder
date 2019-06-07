// handles the logic for determining friend match from data

module.exports = function(newScores, potentialFriendsArray) {
  var bestFriendIndex = 0;
  var bestFriendDifference = 50;
  for (let i = 0; i < potentialFriendsArray.length; i++) {
    var newDifference = checkDifference(
      newScores,
      potentialFriendsArray[i].scores
    );
    console.log(newDifference + " || " + bestFriendDifference);
    if (newDifference < bestFriendDifference) {
      bestFriendIndex = i;
      bestFriendDifference = newDifference;
    }
  }
  console.log(bestFriendIndex);
};
function checkDifference(newScores, potentialScores) {
  console.log(newScores);
  console.log(potentialScores);
  var totalDifference = 0;
  for (let j = 0; j < newScores.length; j++) {
    totalDifference += Math.abs(newScores[j] - potentialScores[j]);
  }
  return totalDifference;
}
