const mongoose = require('mongoose')

const insigniaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  objective: {
    type: Number,
    required: true
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

module.exports = mongoose.model('Insignia', insigniaSchema)