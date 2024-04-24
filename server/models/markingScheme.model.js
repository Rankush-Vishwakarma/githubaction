const mongoose = require('mongoose')

const Schema = mongoose.Schema

const markingScheme = new Schema({
  citerion: {
    type: String,
  },
  vgood: {
    type: String,
  },
  avg: {
    type: String,
  },
  poor: {
    type: String,
  },
  totMark: {
    type: String,
  },

  subject: {
    type: String,
  },
  specalization: {
    type: String,
  },
  position: {
    type: String,
  },
  evaluation: {
    type: String,
  },
})

const MarkingScheme = mongoose.model('markingScheme', markingScheme)
module.exports = MarkingScheme
