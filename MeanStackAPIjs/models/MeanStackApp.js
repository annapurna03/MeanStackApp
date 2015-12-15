var mongoose = require('mongoose');

var MeanStackAppSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String
});

module.exports = mongoose.model('MeanStackApp', MeanStackAppSchema);
