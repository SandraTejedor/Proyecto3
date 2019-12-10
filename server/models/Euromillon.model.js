const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EuromillonSchema = new Schema({
  euromillon:{
    numeros:[],
    estrellas:[],
    millon: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Euromillon = mongoose.model("Euromillon", EuromillonSchema);
module.exports = Euromillon;
