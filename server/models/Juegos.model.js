const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const JuegosSchema = new Schema(
  {
    bonoloto: {
      numeros: [],
      complementario: Number,
      reintegro: Number,
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      }
    },
    euromillon: {
      numeros: [],
      estrellas: [],
      millon: String,
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      }
    },
    gordo: {
      numeros: [],
      reintegro: Number,
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      }
    },
    primitiva: {
      numeros: [],
      complementario: Number,
      reintegro: Number,
      joker: String,
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      }
    },
    lototurf: {
      numeros: [],
      caballo: Number,
      reintegro: Number,
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      }
    },
    quiniela: {
      resultados: [],
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      }
    },
    quinigol: {
      resultados: [],
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
      }
    },
    quintuple: {
      numeros: [],
      fecha: String,
      status: {
        type: String,
        default: "pendiente"
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

const Juegos = mongoose.model("Juegos", JuegosSchema);
module.exports = Juegos;
