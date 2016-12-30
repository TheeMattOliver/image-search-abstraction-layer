const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
	search_term: String,
  	timestamp: {type: Date, default: Date.now}
});

const History = mongoose.model('History', historySchema);
module.exports = History;