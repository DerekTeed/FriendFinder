var path = require("path");

module.exports = function (app) {

  // Basic route that sends the user first to the AJAX Page
  app.get("/", function (req, res) {
    console.log("-------Inside '/' route : something here--------/n Our Directory Name: " +__dirname);
    //res.sendFile(path.join(__dirname, "../public/survey.html"));
    //res.redirect("survey.html");

    var pathName = path.join(__dirname, "../public/survey.html");
    console.log("Our Path yo!!!!!: " + pathName);
    res.sendFile(pathName);
    
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};

