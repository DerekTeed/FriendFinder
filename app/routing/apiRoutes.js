var friendList = require("./../data/friends");

module.exports = function (app) {
  // Do I post to home or survey???
  app.post("/home", function (req, res) {

    var newFriend = {
    name: req.body.name,
    photo: req.body.photo,
    scores: req.body.scores
    }
    console.log(newFriend);
    //res.json({ "hi": "hello from the backend" })
    //push new friend from POST rounte to obj in ffserver.js file
    var diffArray = [];

    //For each friend calculate the diff for each score
    friendList.forEach(function(item, index) {
        var difference = 0;
        for (var i = 0; i < item.scores.length; i++) {
          //calculate the difference between each scores of each friend
            difference += Math.abs(item.scores[i] - newFriend.scores[i]);
        }
        //push the total diff to the diffArray
        diffArray.push({ "difference": difference, "index": index });
    });

    diffArray.sort(function(a, b) {
        return a.difference - b.difference;
    });
    //pushes this to the browser
    res.json(friendList[diffArray[0].index]);
    //
    friendList.push(newFriend);
  });
  // Displays all characters
  app.get("/api/home", function (req, res) {
    return res.json(friendsList);
  });

  app.get("/friendList/:name", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
};



    