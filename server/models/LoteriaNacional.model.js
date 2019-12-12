const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoteriaNacionalSchema = new Schema(
  {
    
      numero: Number,
      serie: Number,
      fraccion: Number,
      sorteo: String,
      fechaSorteo: String,
      status: { type: String, default: "en venta" }
    
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Nacional = mongoose.model("Nacional", LoteriaNacionalSchema);
module.exports = Nacional;
