var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TechArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var TechArticle = mongoose.model("Article", TechArticleSchema);

module.exports = TechArticle;
