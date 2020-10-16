const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//   comments: String,
//   owner: { type: Schema.Types.ObjectId, ref: 'User'},
// }, {
//   timestamps: true
// });

const technologySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  owner: {type: Schema.Types.ObjectId, ref:'User'},
  image: {type: String, required: false},
  infoURL: {type: String, required: false},
  // comments: [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Technology', technologySchema);