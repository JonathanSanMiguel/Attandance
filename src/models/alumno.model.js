const mongoose = require("mongoose");

const Alumn = mongoose.model(
  "Alumno",
  new mongoose.Schema({
    enrollment: String,
    password: {
      type: String,
      default: "InstituteName"
    },
    name: String,
    lastName: String,
    gender: String,
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Grupo"
      },
    roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rol"
      },
    status: { // 1 = active, 2 = inactive, 3 = suspedido
        type: Number,
        default: 1
      },
  },
  {
    timestamps: true,
  })
);

module.exports = Alumn;