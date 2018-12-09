var express = require("express");
var exphbs = require("express-handlebars");
var cheerio = require("cheerio");
var axios = require("axios");

var app = express();
var PORT = process.env.PORT || 3000;

//works with express for template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.render("index");
});

app.use(function(req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - not found");
});

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Express Server Started on http://localhost:3000");
});
