const mongoose = require('mongoose')

const Schema = mongoose.Schema

const message = new Schema({
  gid: {
    type: String,
  },
  author: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  time: {
    type: String,
  },
})

const Message = mongoose.model('message', message)
module.exports = Message
