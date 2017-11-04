const mongoose = require('mongoose');
const db = require('./index.js');

// CREATE WORD SCHEMA
const wordSchema = new mongoose.Schema({
    word: String,
    definition: String,
    username: String
});
const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
