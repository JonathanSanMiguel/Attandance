const mongoose = require("mongoose");

// Guardar alumnos que no asistieron
// Guardar un documento por dia y por curso

const Attendance = mongoose.model(
  "Asistencia",
  new mongoose.Schema({
    date: {
      type: Date,
      default: Date.now
    },
    group:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grupo"
    },
    teacher:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Docente"
    },
    course:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Materia"
    },
    alumns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alumno"
      }
    ],
  })
);

module.exports = Attendance;