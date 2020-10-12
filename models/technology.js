const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  //One-To-One relationship between technology and User
  owner: {type: Schema.Types.ObjectId, ref:'User'},
  image: {type: String, required: false},
  infoURL: {type: String, required: false}
},{
  timestamps: true
});

module.exports = mongoose.model('Technology', technologySchema);