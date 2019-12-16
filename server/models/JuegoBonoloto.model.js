const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const JuegosBonolotoSchema = new Schema(
  {
    bonoloto: {
      numeros: {},
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

const JuegosBonoloto = mongoose.model("JuegosBonoloto", JuegosBonolotoSchema);
module.exports = JuegosBonoloto;
