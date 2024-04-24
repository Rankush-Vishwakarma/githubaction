const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ev1s = new Schema({
  ev1doc: {
    type: String,
  },
  gid: {
    type: String,
  },
})

const Ev1 = mongoose.model('Ev1', ev1s)
module.exports = Ev1
