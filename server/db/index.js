const mongoose = require('mongoose');
const options = {
  useMongoClient: true, // Recommended when writing a new app
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  bufferMaxEntries: 0   // If not connected, return errors immediately rather than waiting for reconnect
};
mongoose.connect('mongodb://localhost/wordreviewdata', options);
mongoose.Promise = global.Promise;
console.log('WE ARE CONNECTED TO MONGOD!')

// 
// var db = mongoose.createConnection('mongodb://localhost/cj');
// db.once('open', function() { ... });


module.exports = mongoose;
