// this will hold the logic for main logic for the separate files
const express = require("express");
const path = require("path");
const htmlRouting = require("./routing/htmlRoutes.js");

var app = express();
var PORT = process.env.PORT || 8080;

htmlRouting.run(app, path);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
