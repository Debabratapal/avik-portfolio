const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
  path: String,
  catagory: {
    type: Schema.Types.ObjectId,
    ref: 'ImageCategory'
  },
  createdAt: Number,
})
