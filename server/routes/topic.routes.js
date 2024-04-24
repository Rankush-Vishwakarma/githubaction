const router = require('express').Router()
let Topic = require('../models/topic.model')

router.route('/').get((req, res) => {
  Topic.find()
    .then((topics) => res.json(topics))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
  const gid = req.body.gid
  const topic = req.body.topic
  const specialization = req.body.specialization
  const status = req.body.status
  const link = req.body.link

  const newTopic = new Topic({
    gid,
    topic,
    specialization,
    status,
    link: 'none',
  })
  newTopic
    .save()
    .then(() => res.json('Topic registered'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/:specalization').get(function (req, res) {
  let myquery = {
    specialization: Object(req.params.specalization),
  }

  Topic.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/u/:id').get((req, res) => {
  Topic.findById(req.params.id)
    .then((topic) => res.json(topic))
    .catch((err) => res.status(400).json('Error: ' + err))
})

//search topic by email address
router.route('/searchBygid/:gid').get((req, res) => {
  let myquery = {
    gid: Object(req.params.gid),
  }
  Topic.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/update/:id').post((req, res) => {
  Topic.findById(req.params.id)
    .then((topics) => {
      topics.status = req.body.status

      topics
        .save()
        .then(() => res.json('Topic Accepted!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/updatel/:id').post((req, res) => {
  Topic.findById(req.params.id)
    .then((topics) => {
      topics.link = req.body.link

      topics
        .save()
        .then(() => res.json('Topic Accepted!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
