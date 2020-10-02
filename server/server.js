const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");

// Load config
dotenv.config({
  path: "./config/config.env",
});

const app = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // this will show more info in the console
}

// Create link to Angular build directory
const distDir = __dirname + "/../app/dist";
app.use(express.static(distDir));

// API router
app.get("/", (req, res) => {
  res.send("it works!");
});
app.use("/api/", require("./routes/api"));

// Initialize the app.
const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});
