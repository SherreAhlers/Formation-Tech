const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comments: String,
    owner: {type: Schema.Types.ObjectId, ref:'User'},
    technology: {type: Schema.Types.ObjectId, ref: 'Technology'}
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Comment', commentSchema);