const { Schema, model } = require('mongoose');
const Journey = model('Journey');
const Participant = model('Participant');

const resultSchema = new Schema({
  participant: { type: Schema.ObjectId, ref: "Participant" },
  journey: { type: Schema.ObjectId, ref: "Journey" },
  game1: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game2: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game3: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game4: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game5: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game6: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game7: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game8: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  game9: {
    type: String,
    enum: ['gana', 'empata', 'pierde']
  },
  hits: {
    type: Number,
    default: 0
  }
});

module.exports = model('Result', resultSchema);