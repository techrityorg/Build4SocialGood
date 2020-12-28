const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema


const contactModel  = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  subject: {
    type: String
  },

  message: {
    type: String,
    required: true
  },
  
  date: {
    type: Date, 
    default: Date.now
  }
});

contactModel.plugin(uniqueValidator);

module.exports = mongoose.model('contact', contactModel);
