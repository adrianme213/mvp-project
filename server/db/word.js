const mongoose = require('mongoose');

// CREATE WORD SCHEMA
const wordSchema = new mongoose.Schema({
    word: String,
    definition: String,
    name: String
});
const Word = mongoose.model('Word', wordSchema);

// CLEAR DATABASE
Word.remove({}, function(err) {
  if (err) {
    console.log ('Error deleting data!');
  } else  {
    console.log ('Successfully deleted old data.');
  }
});

// INSERT SEED DATA
Word.insertMany([
  { word: "nano", definition: 'one billionth, 10 to the -9', name: 'science'},
  { word: "centi", definition: 'one hundredth, 10 to the -2', name: 'science'},
  { word: "milli", definition: 'one thousandth, 10 to the -3', name: 'science'},
  { word: "pico", definition: 'one trillionth, 10 to the -12', name: 'science'},
  { word: "integer", definition: 'a whole number', name: 'math'},
  { word: "integration", definition: 'the summation of parts, or commonly referred to as area under the curve', name: 'math'},
  { word: "kinematics", definition: 'the study of describing motion', name: 'science'},
  { word: "momentum", definition: 'physical quantity describing the product of mass multiplied by velocity ', name: 'science'}
]);
module.exports = Word;
