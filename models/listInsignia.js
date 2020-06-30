const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listInsigSchema = mongoose.Schema({
  idInsignia: {
    type: Schema.ObjectId,
    ref: 'Insignia'
  },
  idUser: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  progres: {
    type: Number,
    default: 0
  },
  status: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('ListInsignia', listInsigSchema)