// this will hold the logic for main logic for the separate files
const express = require("express");
const path = require("path");
const htmlRouting = require("./routing/htmlRoutes.js");
const apiRouting = require("./routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRouting(app, path);
apiRouting(app, path);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
