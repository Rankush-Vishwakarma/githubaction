const router = require('express').Router()
const Mark = require('../models/mark.model')
let Marks = require('../models/mark.model')

router.route('/').get((req, res) => {
  Marks.find()
    .then((marks) => res.json(marks))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/getMark/:gid').get(function (req, res) {
  let myquery = { gid: Object(req.params.gid) }

  Mark.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/add').post((req, res) => {
  const gid = req.body.gid
  // const eval=req.body.evaluation1
  // const evaluation2=req.body.evaluation2
  // const finalevaluation=req.body.finalevaluation
  const doc1 = 'None'
  const doc2 = 'None'
  const docfinal = 'None'
  const ev1Mark = 'None'
  const ev2Mark = 'None'
  const finalevMark = 'None'

  const mark = new Marks({
    gid,
    ev1Mark,
    ev2Mark,
    finalevMark,
    doc1,
    doc2,
    docfinal,
  })
  mark
    .save()
    .then(() => res.json('marks added'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/update/ev1/:id').post((req, res) => {
  Mark.findById(req.params.id)
    .then((mark) => {
      mark.ev1Mark = req.body.mark
      mark
        .save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/ev2/:id').post((req, res) => {
  Mark.findById(req.params.id)
    .then((mark) => {
      mark.ev2Mark = req.body.mark
      mark
        .save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/fev/:id').post((req, res) => {
  Mark.findById(req.params.id)
    .then((mark) => {
      mark.finalevMark = req.body.mark
      mark
        .save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/doc1/:id').post((req, res) => {
  Mark.findById(req.params.id)
    .then((mark) => {
      mark.doc1 = req.body.mark
      mark
        .save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/doc2/:id').post((req, res) => {
  Mark.findById(req.params.id)
    .then((mark) => {
      mark.doc2 = req.body.mark
      mark
        .save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/docf/:id').post((req, res) => {
  Mark.findById(req.params.id)
    .then((mark) => {
      mark.docfinal = req.body.mark
      mark
        .save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})
module.exports = router
