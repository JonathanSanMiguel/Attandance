const mongoose = require("mongoose");

const Role = mongoose.model(
  "Rol",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;
