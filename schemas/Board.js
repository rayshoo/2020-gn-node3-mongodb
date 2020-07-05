const mongoose = require('mongoose');
const { Schema } = mongoose;
/* ObjectId의 타입 가져옴 */
const { Types: ObjectId } = Schema;

const boardSchema = new Schema({
  writer: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Board', boardSchema);
