const router = require('express').Router()
let MarkingScheme = require('../models/markingScheme.model')

router.route('/').get((req, res) => {
  MarkingScheme.find()
    .then((markingScheme) => res.json(markingScheme))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/:position').get(function (req, res) {
  let myquery = {
    position: Object(req.params.position),
  }

  MarkingScheme.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/:specalization').get(function (req, res) {
  let myquery = {
    position: Object(req.params.position),
  }

  MarkingScheme.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/check').post((req, res) => {
  MarkingScheme.find(
    {
      specalization: req.body.specalization,
      position: req.body.position,
      evaluation: req.body.evaluation,
    },
    function (err, result) {
      if (err) throw err
      res.json(result)
    }
  )
})

router.route('/add').post((req, res) => {
  MarkingScheme.insertMany(req.body)
    .then((val) => {
      res.json('done')
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = router
