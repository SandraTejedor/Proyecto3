const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const JuegosPrimitivaSchema = new Schema(
  {
    primitiva: {
      numeros: {},
      reintegro: String,
      joker: String,
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      },
      user: {
        username: String,
        _id: String,
        perfil: String,
        email: String
      }
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const JuegosPrimitiva = mongoose.model("JuegosPrimitiva", JuegosPrimitivaSchema);
module.exports = JuegosPrimitiva;
