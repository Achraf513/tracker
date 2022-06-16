var PORT = process.env.PORT || 80;
const http = require("http");
const express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
var server = http.createServer(app);
var requests = [];

app.get("/", function (req, res) {
  requests.push(req.ip)
  res.send(requests);
});

server.listen(PORT, function () {
  console.log("server listening to port" + PORT);
});
