const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminfiles = new Schema({
  specialization: {
    type: String,
  },
  description: {
    type: String,
  },
  filepdf: {
    type: String,
  },
  ev1doc: {
    type: String,
  },
  ev1pre_start: {
    type: String,
  },
  ev1pre_end: {
    type: String,
  },
  ev2doc: {
    type: String,
  },
  ev2pre_start: {
    type: String,
  },
  ev2pre_end: {
    type: String,
  },
  ev3doc: {
    type: String,
  },
  ev3pre_start: {
    type: String,
  },
  ev3per_end: {
    type: String,
  },
})

const Adminfile = mongoose.model('Adminfile', adminfiles)
module.exports = Adminfile
