const router = require('express').Router()
let Message = require('../models/message.model')

router.route('/').get((req, res) => {
  Message.find()
    .then((message) => res.json(message))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/:gid').get((req, res) => {
  let myquery = {
    gid: Object(req.params.gid),
  }
  Message.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/add').post((req, res) => {
  const gid = req.body.gid
  const author = req.body.author
  const email = req.body.email
  const message = req.body.message
  const time = req.body.time

  const newMessage = new Message({
    gid,
    author,
    email,
    message,
    time,
  })
  newMessage
    .save()
    .then(() => res.json('Message added'))
    .catch((err) => res.status(400).json('Error:' + err))
})

module.exports = router
