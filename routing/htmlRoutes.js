// this will have the get route for displaying the html pages
module.exports = function(expressRef, pathRef) {
  expressRef.get("/", function(req, res) {
    res.sendFile(pathRef.join(__dirname, "../public/home.html"));
  });
  expressRef.get("/survey", function(req, res) {
    res.sendFile(pathRef.join(__dirname, "../public/survey.html"));
  });
};
