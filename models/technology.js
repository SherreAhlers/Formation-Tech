const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  owner: {type: Schema.Types.ObjectId, ref:'User'},
  // image: {type: String, required: false},  icebox item
  infoURL: {type: String, required: false},
 
}, {
  timestamps: true
});

module.exports = mongoose.model('Technology', technologySchema);