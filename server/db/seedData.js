const Word = require('./word.js');

exports.seedData = () => {
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

  //db.words.find() --> returns all words as objects
}
