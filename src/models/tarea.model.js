const mongoose = require("mongoose");

const Task = mongoose.model(
  "Tarea",
  new mongoose.Schema({
    name: String,
    teacher:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docente"
      },
    group:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Grupo"
      },
    course: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Materia"
      },
    title: String,
    description: String,
    CloseDate: Date
  },
  {
    timestamps: true,
  })
);

module.exports = Task;