var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
