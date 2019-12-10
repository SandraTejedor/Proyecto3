const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LototurfSchema = new Schema(
  {
    lototurf: {
      numeros: [],
      caballo: String,
      reintegro: String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Lototurf = mongoose.model("Lototurf", LototurfSchema);
module.exports = Lototurf;
