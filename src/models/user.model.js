const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, default: null },
});

const User = mongoose.model("user", users);

module.exports = User;
