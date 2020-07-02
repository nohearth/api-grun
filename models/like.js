const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likeSchema = mongoose.Schema({
  idUser: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  idPost: {
    type: Schema.ObjectId,
    ref: 'Post'
  },
  status: {
    type: String,
    default: 'I'
  }
})

module.exports = mongoose.model('Like', likeSchema)