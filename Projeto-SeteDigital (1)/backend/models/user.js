const mongoose = require("mongoose");

const User = mongoose.model(
  "users",
  new mongoose.Schema({ nome: String, idade: Number })
);

module.exports = User;
