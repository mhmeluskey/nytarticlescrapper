var express = require("express");
var exphbs = require("express-handlebars");
var cheerio = require("cheerio");
var axios = require("axios");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

//ignore before publishing

//works with express for template engine"

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.render("index");
});

axios
  .get("https://www.nytimes.com/section/technology")
  .then(function(response) {
    var $ = cheerio.load(response.data);
    $("h2").each(function(i, element) {
      var result = {};

      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");
    });
  });

app.use(function(req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - not found");
});

mongoose.connect(
  dbURL,
  { useNewUrlParser: true },
  err => {
    console.log("mongo db connection", err);
  }
);

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Express Server Started on http://localhost:3000");
});
