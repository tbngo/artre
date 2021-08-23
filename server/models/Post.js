const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 30,
  },
  body: {
    type: String,
    max: 500,
  },
});

module.exports = mongoose.model("Post", PostSchema);
