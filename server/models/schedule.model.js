const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schedule = new Schema({
  evaluation1: {
    type: String,
  },
  evaluation2: {
    type: String,
  },
  final_evaluation: {
    type: String,
  },

  groupID: {
    type: String,
  },
  link1: {
    type: String,
  },

  link2: {
    type: String,
  },

  linkF: {
    type: String,
  },
})

const Schedule = mongoose.model('schedule', schedule)
module.exports = Schedule
