const mongoose = require("mongoose");

const Group = mongoose.model(
  "Grupo",
  new mongoose.Schema({
    name: String,
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docente"
      }
    ],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Materia"
      }
    ],
    Alumns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alumno"
      }
    ],
  })
);

module.exports = Group;