const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  imagePost: {
    type: String
  },
  idUser: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  status: {
    type: Boolean,
    required: true,
    default: true
  }
})

module.exports = mongoose.model('Post', postSchema)