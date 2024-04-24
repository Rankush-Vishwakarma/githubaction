const mongoose = require('mongoose')

const Schema = mongoose.Schema

const topic = new Schema({
  gid: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    require: true,
  },
  specialization: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
})

const Topic = mongoose.model('topic', topic)
module.exports = Topic
