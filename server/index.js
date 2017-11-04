const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Word = require('./db/word.js');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const options = {
  useMongoClient: true, // Recommended when writing a new app
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  bufferMaxEntries: 0   // If not connected, return errors immediately rather than waiting for reconnect
};

mongoose.connect('mongodb://localhost/wordreviewdata', options);

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// /* -------- ROUTE HANDLING --------- */
app.get('/wordsbytopic', function(req, res) {
  Word.find({name: req.query.name}).exec((err, words) => {
    if (err) {
      console.log(err)
    }
    console.log(words)
    res.json(words);
  })
});

app.post('/words', function(req, res) {
  var newWord = new Word(req.body);
  newWord.save((err, newWord) => {
    if (err) {
      console.log(err)
    }
    res.json(newWord);
  });
});

app.get('/*', function(req, res) {
  res.send('You have navigated to our end page! Please go back to welcome');
});


// /* -------- END ROUTE HANDLING --------- */


app.listen(port, function() {
  console.log('Listening on: ', port)
});
