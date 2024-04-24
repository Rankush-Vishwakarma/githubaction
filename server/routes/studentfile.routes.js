const express = require('express')
const router = express.Router()
const multer = require('multer')
const SFile = require('../models/studentfile.model')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'supload')
  },
  filename: (req, file, callback) => {
    callback(null, file.origanalname)
  },
})

const supload = multer({ storage: storage })

//GET ALL DATA
router.get('/get', (req, res) => {
  SFile.find()
    .then((file) => {
      res.json(file)
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

//ADD NEW DATA
router.post('/add', supload.single('file'), (req, res) => {
  const newfile = new SFile({
    ev1doc: req.body.originalname,
    ev1pre_start: req.body.originalname,
    ev2doc: req.body.originalname,
    ev2pre_start: req.body.originalname,
    ev3doc: req.body.originalname,
    ev3pre_start: req.body.originalname,
  })

  newfile
    .save()
    .then(() => res.json('new student file posted'))
    .catch((err) => res.status(400).json(`Error : ${err}`))
})

module.exports = router
