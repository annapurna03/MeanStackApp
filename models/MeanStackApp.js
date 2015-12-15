var mongoose = require('mongoose');

var MSASchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String
});

module.exports = mongoose.model('MeanStackApp', MeanStackApp);
