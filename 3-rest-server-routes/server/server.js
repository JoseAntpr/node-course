require("./config/config");

const express = require("express");
const app = express();

const users = require("./routes/users");

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/user", users);

app.listen(process.env.PORT, () => {
  console.log("Listening on port: ", process.env.PORT);
});
