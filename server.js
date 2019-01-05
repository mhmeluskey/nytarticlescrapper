var express = require("express");
var exphbs = require("express-handlebars");
var cheerio = require("cheerio");
var axios = require("axios");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

//ignore before publishing
mongoose.connect(
  "mongodb://localhost/scrapper",
  { useNewUrlParser: true }
);

//works with express for template engine"

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.get("/scrape", function(req, res) {
  axios
    .get("https://www.nytimes.com/section/technology")
    .then(function(response) {
      var $ = cheerio.load(response.data);
      $("h2").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .find("a")
          .text();
        result.link = $(this)
          .find("a")
          .attr("href");
        if (result.link && !$(this).attr("aria-hidden")) {
          console.log(result.link);
        }
      });
      res.render("index");
      //make route
    });
});

app.get("/articles", function(req, res) {
  // Grab every document in the Articles collection
  db.Article.find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// app.use(function(req, res) {
//   res.type("text/plain");
//   res.status(404);
//   res.send("404 - not found");
//});

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);

app.listen(PORT, function() {
  console.log("Express Server Started on http://localhost:3000");
});
