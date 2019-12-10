const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const SabadoSchema = new Schema(
  {
    sabado: {
      premios: [],
      reintegros: []
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Sabado = mongoose.model("Sabado", SabadoSchema);
module.exports = Sabado;
