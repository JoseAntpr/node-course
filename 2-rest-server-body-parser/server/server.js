require("./config/config");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/user", function(req, res) {
  res.json("GET local USER");
});

app.post("/user", function(req, res) {
  let body = req.body;

  if (body.username === undefined) {
    res.status(400).json({
      ok: false,
      message: "Username is required",
    });
  } else {
    res.json({
      user: body,
    });
  }
});

app.put("/user/:id", function(req, res) {
  let id = req.params.id;

  res.json({
    id,
  });
});

app.delete("/user", function(req, res) {
  res.json("DELETE User");
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port: ", process.env.PORT);
});
