const express = require("express");
const app = express();

app.use("/user", require("./users"));
app.use(require("./login"));

module.exports = app;
