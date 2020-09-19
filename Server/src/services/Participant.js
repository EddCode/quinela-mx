const { Schema, model } = require('mongoose');

const participantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: Number,
  email: String,
  payed: {
    type: Boolean,
    default: false
  },
  comments: String,
  created: {
    type: Date,
    default: Date.now
  },
  reference: String
});

module.exports = model('Participant', participantSchema);