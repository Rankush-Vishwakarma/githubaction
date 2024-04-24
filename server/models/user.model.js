const mongoose = require('mongoose')

const Schema = mongoose.Schema

const user = new Schema({
  name: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    require: true,
  },
  specialization: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
})

const User = mongoose.model('user', user)
module.exports = User
