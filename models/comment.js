const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  idUser: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  idPost: {
    type: Schema.ObjectId,
    ref: 'Post'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Comment', commentSchema)