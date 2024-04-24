const express = require('express')
const router = express.Router()
const multer = require('multer')
const SFile = require('../models/ev1.model')

const storage = multer.diskStorage({
  destination: (req, ev1doc, callback) => {
    callback(null, 'supload')
    // destination: "upload",
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
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
router.post('/add', supload.single('ev1doc'), (req, res) => {
  const newfile = new SFile({
    ev1doc: req.file.originalname,
    gid: req.body.gid,
  })

  newfile
    .save()
    .then(() => res.json('new student file posted'))
    .catch((err) => res.status(400).json(`Error : ${err}`))
})

//GET DATA USING GID

router.get('/get/:gid', (req, res) => {
  let myquery = {
    gid: Object(req.params.gid),
  }
  SFile.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

module.exports = router
