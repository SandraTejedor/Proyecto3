const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BonolotoSchema = new Schema({
  bonoloto:{
    numeros:[],
    complementario: String,
    reintegro: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Bonoloto = mongoose.model("Bonoloto", BonolotoSchema);
module.exports = Bonoloto;
