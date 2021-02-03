require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Global routes config
app.use(require("./routes/index"));

mongoose.connect("mongodb://localhost:27017/moovies", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

var db = mongoose.connection;

db.on("error", (err) => {
  console.log("Connection to DB error", err);
});

db.once("open", () => {
  console.log("Connection to DB successful");
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port: ", process.env.PORT);
});
