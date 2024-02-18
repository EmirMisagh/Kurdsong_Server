const mongoose = require("mongoose");

// Connect to Mongo -------------------------------------------

const Usersch = new mongoose.Schema({
  name: String,
  family: String,
  username: String,
  email: String,
  emailVerified: Boolean,
  password: String,
  avatar: String,
  country: String,
  city: String,
  phone: Number,
  token: String,
  admin: String,
  accses: Boolean,
  result: Array,
  notification: Array,
  notificationSetting: Array,
  singers: Array,
  fovorite: Array,
  fovoritePlaylist: Array,
  socialAccont: Array,
});

module.exports = mongoose.model("user", Usersch);
