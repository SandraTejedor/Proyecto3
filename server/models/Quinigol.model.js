const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const QuinigolSchema = new Schema(
  {
    quinigol: {
      equipos: [],
      partidos: [],
      resultados: [],
      fecha: String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Quinigol = mongoose.model("Quinigol", QuinigolSchema);
module.exports = Quinigol;
