const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/:email').get(function (req, res) {
  let myquery = { email: Object(req.params.email) }

  User.findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/allocatepanel').post((req, res) => {
  console.log(req.body.specialization, req.body.position)
  User.find({ position: req.body.position }, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/add').post((req, res) => {
  const name = req.body.name
  const position = req.body.position
  const email = req.body.email
  const phone = req.body.phone
  const address = req.body.address
  const id = req.body.id
  const specialization = req.body.specialization
  const password = req.body.password

  const newUser = new User({
    name,
    position,
    email,
    phone,
    address,
    id,
    specialization,
    password,
  })
  newUser
    .save()
    .then(() => res.json('User added'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/u/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      users.name = req.body.name
      users.position = req.body.position
      users.email = req.body.email
      users.phone = req.body.phone
      users.address = req.body.address
      users.id = req.body.id
      users.specialization = req.body.specialization

      users
        .save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/login').post((req, res) => {
  User.findOne({ email: req.body.email }, function (err, result) {
    if (err) throw err
    if (result != null) {
      if (result.password === req.body.password) {
        res.json('granted')
      } else {
        res.json('denied')
      }
    } else {
      res.json('Not Found')
    }
  })
})

router.route('/:specalization').get(function (req, res) {
  let myquery = {
    specialization: Object(req.params.specalization),
  }

  User.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

module.exports = router
