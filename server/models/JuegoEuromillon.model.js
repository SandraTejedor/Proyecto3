const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const JuegosEuromillonSchema = new Schema(
  {
    euromillon: {
      numeros: {},
      estrellas: {},
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

const JuegosEuromillon = mongoose.model(
  "JuegosEuromillon",
  JuegosEuromillonSchema
);
module.exports = JuegosEuromillon;
