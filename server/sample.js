var bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var x ;
app.get("/", function (req, res, next) {
  console.log(x);
  res.send(x);
});
app.post("/data", function (req, res, next) {
  x = req.body;
  console.log(req.body);
  res.json({ status: true, Message: "Log Printed" });
});
var servers = app.listen(4000, function () {
  console.log("app started on port 4000");
});
