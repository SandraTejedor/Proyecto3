const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const QuintupleSchema = new Schema(
  {
    quintuple: {
      numeros: [],
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

const Quintuple = mongoose.model("Quintuple", QuintupleSchema);
module.exports = Quintuple;
