const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const resultSchema = new Schema({
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Results = mongoose.model('Result', resultSchema);
module.exports = Results;
