const mongoose = require('mongoose')

const Schema = mongoose.Schema

const submittype = new Schema({
  evaluation1: {
    type: String,
  },
  evaluation1: {
    type: String,
  },
  evaluation1: {
    type: String,
  },
})

const Submittype = mongoose.model('Submittype', submittype)
module.exports = Submittype
