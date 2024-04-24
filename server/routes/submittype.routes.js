const express = require('express')
const router = express.Router()
const Submit = require('../models/submittype.model')

//GET ALL DATA
router.get('/get', (req, res) => {
  Submit.find()
    .then((submit) => res.json(submit))
    .catch((err) => res.status(400).json(`Err : ${err}`))
})

//ADD NEW DATA
router.post('/add', (req, res) => {
  const newsubmit = new Submit({
    evaluation1: req.body.evaluation1,
    evaluation2: req.body.evaluation2,
    evaluation3: req.body.evaluation3,
  })

  newsubmit
    .save()
    .then(() => res.json('new submit posted'))
    .catch((err) => res.status(400).json(`error : ${err} `))
})
