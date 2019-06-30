const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let imageCategory = new Schema({
  name: String,
  id:String,
})

module.exports = mongoose.model('ImageCategory', imageCategory);