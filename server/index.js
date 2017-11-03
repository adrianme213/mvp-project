const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res) {
  res.send('Hi');
})
app.use(express.static(path.resolve(__dirname, '../client')));

const port = 3000;
app.listen(port, function() {
  console.log('Listening on: ', port)
});
