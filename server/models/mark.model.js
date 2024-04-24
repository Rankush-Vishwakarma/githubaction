const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mark = new Schema({
  gid: {
    type: String,
  },

  ev1Mark: {
    type: String,
  },
  ev2Mark: {
    type: String,
  },
  finalevMark: {
    type: String,
  },
  doc1: {
    type: String,
  },
  doc2: {
    type: String,
  },
  docfinal: {
    type: String,
  },

  // status:{
  //     type:String
  // }
})

const Mark = mongoose.model('marks', mark)
module.exports = Mark
