const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ev2 = new Schema({
  ev2doc: {
    type: String,
  },
  gid: {
    type: String,
  },
})

const Ev2 = mongoose.model('Ev2', ev2)
module.exports = Ev2
