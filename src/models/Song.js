const mongoose = require("mongoose");

// Connect to Mongo -------------------------------------------

const Usersch = new mongoose.Schema({
  name: String,
  singer: String,
  category: String,
  image: String,
  show: Boolean,
  like: Number,
  dislike: Number,
  view: Number,
});

module.exports = mongoose.model("song", Usersch);
