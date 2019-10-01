const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let imageCategory = new Schema({
  id:String,
  name: String,
})

module.exports = mongoose.model('Imagecategories', imageCategory);