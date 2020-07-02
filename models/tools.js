const mongoose = require('mongoose')

const toolsSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  imageProfile: {
    type: Buffer,
    required: true
  }
})

module.exports = mongoose.model('Tools', toolsSchema)