const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.docente = require("./docente.model");
db.rol = require("./rol.model");
db.grupo = require("./grupo.model");
db.alumno = require("./alumno.model");
db.materia = require("./materia.model");
db.asistencia = require("./asistencia.model");
db.materia = require("./tarea.model");

db.ROLES = ["admin", "docente", "alumno"];

module.exports = db;