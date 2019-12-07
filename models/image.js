const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  path: String,
  createdAt: Number,
  category: String,
});

module.exports = mongoose.model('Image', imageSchema);