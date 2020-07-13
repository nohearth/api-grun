const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificationSchema = mongoose.Schema({
      idUser: {
        type: Schema.ObjectId,
        ref: 'User'
      },
      message: {
        type: String,
        required: true
      },
      group: {
        type: String,
        required: true
      },
      mark: {
        type: Boolean,
        default: false
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

module.exports = mongoose.model('Notification', notificationSchema)