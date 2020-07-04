const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificacionSchema = mongoose.Schema({
      idUser: {
        type: Schema.ObjectId,
        ref: 'User'
      },
      idPost: {
        type: Schema.ObjectId,
        ref: 'Post'
      },
      group: {
        type: String,
        required: true
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

module.exports = mongoose.model('Notificacion', notificacionSchema)