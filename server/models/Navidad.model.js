const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const NavidadSchema = new Schema(
  {
    navidad: {
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

const Navidad = mongoose.model("Navidad", NavidadSchema);
module.exports = Navidad;
