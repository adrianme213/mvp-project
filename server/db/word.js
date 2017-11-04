const mongoose = require('./index');

// CREATE WORD SCHEMA
const wordSchema = mongoose.Schema({
    word: String,
    definition: String,
    username: String,
});
const Word = mongoose.model('Word', wordSchema);

// CLEARS OUT OLD DATA. THEORETICALLY, THIS FILE SHOULD RUN ONCE
Word.remove({}, function(err) {
  if (err) {
    console.log ('Error deleting data!');
  } else  {
    console.log ('Successfully deleted old data.');
  }
});

Word.create({ word: 'nano', definition: 'ten to the negative ninth power', username: 'adrianme213',},
  function (err, small) {
    if (err) return handleError(err);
    console.log('Saved entry')
});

Word.insertMany([
   { word: "nano", definition: 'ten to the negative ninth power', username: 'adrianme213'},
   { word: "centi", definition: 'ten to the negative second power', username: 'adrianme213'},
   { word: "kinematics", definition: 'the study of describing motion', username: 'bsimms85'},
   { word: "momentum", definition: 'physical quantity describing the product of mass multiplied by velocity ', username: 'bsimms85'}
]);
console.log('WORD FILE INSERT DONE')

//db.words.find() --> returns all words as objects

module.exports = Word;
