const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    require: true,
  },
  screen_name: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
