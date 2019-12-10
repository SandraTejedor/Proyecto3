const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PrimitivaSchema = new Schema(
  {
    primitiva: {
      numeros: [],
      complementario: String,
      reintegro: String,
      joker: String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Primitiva = mongoose.model("Primitiva", PrimitivaSchema);
module.exports = Primitiva;
