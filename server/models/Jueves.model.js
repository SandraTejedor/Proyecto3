const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const JuevesSchema = new Schema(
  {
    jueves: {
      premios: [],
      reintegros: [],
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

const Jueves = mongoose.model("Jueves", JuevesSchema);
module.exports = Jueves;
