const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const JuegosGordoSchema = new Schema(
  {
    gordo: {
      numeros: {},
      clave: String,
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

const JuegosGordo = mongoose.model("JuegosGordo", JuegosGordoSchema);
module.exports = JuegosGordo;
