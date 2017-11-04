const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
/* -------- ROUTE HANDLING --------- */
// app.get('/', function(req, res) {
//   res.send('Hi');
// });

// app.get('/*', function(req, res) {
//   res.send('Hi');
// });

app.listen(port, function() {
  console.log('Listening on: ', port)
});
