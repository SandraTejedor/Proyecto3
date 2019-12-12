const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NiñoSchema = new Schema(
  {
    niño: {
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

const Niño = mongoose.model("Niño", NiñoSchema);
module.exports = Niño;
