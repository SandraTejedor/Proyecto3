const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const QuinielaSchema = new Schema(
  {
    quiniela: {
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

const Quiniela = mongoose.model("Quiniela", QuinielaSchema);
module.exports = Quiniela;
