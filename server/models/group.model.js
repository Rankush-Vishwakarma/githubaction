const mongoose = require('mongoose')

const Schema = mongoose.Schema

const group = new Schema({
  gid: {
    type: String,
    require: true,
  },
  supervisor: {
    type: String,
  },
  co_supervisor: {
    type: String,
  },
  panelMember: {
    type: String,
  },
  specialization: {
    type: String,
  },
  first: {
    type: String,
    require: true,
  },
  email1: {
    type: String,
    require: true,
  },
  second: {
    type: String,
    require: true,
  },
  email2: {
    type: String,
    require: true,
  },
  third: {
    type: String,
    require: true,
  },
  email3: {
    type: String,
    require: true,
  },
  forth: {
    type: String,
    require: true,
  },
  email4: {
    type: String,
    require: true,
  },
})

const Group = mongoose.model('group', group)
module.exports = Group
