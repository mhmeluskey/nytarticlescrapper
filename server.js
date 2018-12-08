var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var cherrio = require("cheerio");
var axios = require("axios");

var app = express();

//works with express for template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);

// app.use(function(req, res) {
//   res.type("text/plain");
//   res.status(404);
//   res.send("404 - not found");
// });

app.get("/", function(req, res) {
  res.render("index");
});

app.use(function(req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - not found");
});

app.listen(app.get("port"), function() {
  console.log("Express Server Started on http://localhost:3000");
});
