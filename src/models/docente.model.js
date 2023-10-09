const mongoose = require("mongoose");

const User = mongoose.model(
  "Docente",
  new mongoose.Schema({
    name: {
      type:String,
      require
    },   
    lastName: {
      type:String,
      require
    },   
    email: {
      type:String,
      require
    },  
    password: {
      type:String,
      require
    },  
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Grupo"
      }
    ],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Materia"
      }
    ],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rol"
      }
    ],
    status: { // 1 = active, 2 = inactive, 3 = suspedido
      type: Number,
      default: 1
    },
  },
  {
    timestamps: true,
  })
);

module.exports = User;