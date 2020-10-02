var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/../app/dist/app";
app.use(express.static(distDir));

// API router
app.get("/", (req, res) => {
  res.send("it works!");
});
app.use("/api/", require("./routes/api"));

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});