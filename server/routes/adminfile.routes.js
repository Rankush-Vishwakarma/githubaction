const express = require('express')
const router = express.Router()
const multer = require('multer')
const File = require('../models/adminfile.model')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'upload')
    // destination: "upload",
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

//GET ALL DATA
router.get('/get', (req, res) => {
  File.find()
    .then((file) => {
      res.json(file)
      // https.get(file.secure_url, (filepdf) => filepdf.pipe(res));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

router.get('/get/:specialization', (req, res) => {
  let myquery = {
    specialization: Object(req.params.specialization),
  }
  File.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

//ADD NEW DATA
router.post('/add', upload.single('file'), (req, res) => {
  const newfile = new File({
    specialization: req.body.specialization,
    description: req.body.description,
    filepdf: req.file.originalname,
    ev1doc: req.body.ev1doc,
    ev1pre_start: req.body.ev1pre_start,
    ev1pre_end: req.body.ev1pre_end,
    ev2doc: req.body.ev2doc,
    ev2pre_start: req.body.ev2pre_start,
    ev2pre_end: req.body.ev2pre_end,
    ev3doc: req.body.ev3doc,
    ev3pre_start: req.body.ev3pre_start,
    ev3pre_end: req.body.ev3pre_end,
  })

  newfile
    .save()
    .then(() => res.json('new file posted..'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

//GET DATA BY ID
router.get('/:id', (req, res) => {
  File.findById(req.params.id)
    .then((file) => res.json(file))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

//UPDATE DATA

// router.post('/update/:id', (req, res) => {
//   File.findById(req.params.id)
//     .then((newfile) => {
//       specialization: null,
//       description: null,
//     })
// })

module.exports = router
