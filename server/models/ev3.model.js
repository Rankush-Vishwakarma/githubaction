const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ev3 = new Schema({
  ev3doc: {
    type: String,
  },
  gid: {
    type: String,
  },
})

const Ev3 = mongoose.model('Ev3', ev3)
module.exports = Ev3
