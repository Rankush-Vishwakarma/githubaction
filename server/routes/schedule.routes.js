const router = require('express').Router()
let Schedule = require('../models/schedule.model')

router.route('/').get((req, res) => {
  Schedule.find()
    .then((marks) => res.json(marks))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
  const evaluation1 = req.body.evaluation1
  const evaluation2 = req.body.evaluation2
  const final_evaluation = req.body.final_evaluation
  const groupID = req.body.groupID
  const link1 = req.body.link1
  const link2 = req.body.link2
  const linkF = req.body.linkF

  const mark = new Schedule({
    evaluation1,
    evaluation2,
    final_evaluation,
    groupID,
    link1,
    link2,
    linkF,
  })
  mark
    .save()
    .then(() => res.json('marks added'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/get/:groupID').get(function (req, res) {
  let myquery = {
    groupID: Object(req.params.groupID),
  }

  Schedule.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

module.exports = router
