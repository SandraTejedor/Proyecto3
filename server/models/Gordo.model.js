const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const GordoSchema = new Schema({
  gordo:{
    numeros:[],
    reintegro: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Gordo = mongoose.model("Gordo", GordoSchema);
module.exports = Gordo;
