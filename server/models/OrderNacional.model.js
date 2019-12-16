const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderNacionalSchema = new Schema(
  {
    numero: String,
    serie: Number,
    fraccion: Number,
    sorteo: String,
    fechaSorteo: String,
    status: String,
    user: {
      username: String,
      _id: String,
      perfil:String,
      email:String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const OrderNacional = mongoose.model("OrderNacional", OrderNacionalSchema);
module.exports = OrderNacional;
