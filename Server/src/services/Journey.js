const { Schema, model } = require('mongoose');

const journeySchema = new Schema({
  game1Local: String,
  game1Visitor: String,
  game2Local: String,
  game2Visitor: String,
  game3Local: String,
  game3Visitor: String,
  game4Local: String,
  game4Visitor: String,
  game5Local: String,
  game5Visitor: String,
  game6Local: String,
  game6Visitor: String,
  game7Local: String,
  game7Visitor: String,
  game8Local: String,
  game8Visitor: String,
  game9Local: String,
  game9Visitor: String,
  dateStart: Date,
  dateEnd: Date
});

module.exports = model('Journey', journeySchema);