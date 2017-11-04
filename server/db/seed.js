const mongoose = require('./index');
const Word = require('./word');

/*
This code uses the Word collection.
To populate the Word collection, run the following:
*/
Word.insertMany([
   { word: "nano", definition: 'ten to the negative ninth power', username: 'adrianme213'},
   { word: "centi", definition: 'ten to the negative second power', username: 'adrianme213'},
   { word: "kinematics", definition: 'the study of describing motion', username: 'bsimms85'},
   { word: "momentum", definition: 'physical quantity describing the product of mass multiplied by velocity ', username: 'bsimms85'}
]);

console.log('SEED INSERT DONE!')
