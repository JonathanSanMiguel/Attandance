const mongoose = require("mongoose");

const Course = mongoose.model(
  "Materia",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Course;