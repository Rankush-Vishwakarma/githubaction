const router = require('express').Router()
let Group = require('../models/group.model')
// var uuid = require('uuid');

router.route('/add').post((req, res) => {
  // const gid = uuidv4()
  const gid = req.body.gid
  const specialization = req.body.specialization
  const first = req.body.first
  const email1 = req.body.email1
  const second = req.body.second
  const email2 = req.body.email2
  const third = req.body.third
  const email3 = req.body.email3
  const forth = req.body.forth
  const email4 = req.body.email4
  const supervisor = req.body.supervisor
  const co_supervisor = req.body.co_supervisor
  const panelMember = req.body.panelMember

  const newGroup = new Group({
    gid,
    specialization,
    first,
    email1,
    second,
    email2,
    third,
    email3,
    forth,
    email4,
    supervisor,
    co_supervisor,
    panelMember,
  })
  newGroup
    .save()
    .then(() => res.json('Group added'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/').get((req, res) => {
  Group.find()
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/check').post((req, res) => {
  Group.find(
    { email1: req.body.email } || { email2: req.body.email } || {
        email3: req.body.email,
      } || { email4: req.body.email },
    function (err, result) {
      if (err) throw err
      res.json(result)
    }
  )
})

router.route('/pCheck').post((req, res) => {
  Group.find({ panelMember: req.body.panelMember }, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/:id').get(function (req, res) {
  let myquery = { _id: Object(req.params.id) }

  Group.findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/get/:gid').get(function (req, res) {
  let myquery = { gid: Object(req.params.gid) }

  Group.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/panel/:panelMember').get(function (req, res) {
  let myquery = { panelMember: Object(req.params.panelMember) }

  Group.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/supervisour/:supervisor').get(function (req, res) {
  let myquery = { supervisor: Object(req.params.supervisor) }

  Group.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/cosupervisour/:cosupervisor').get(function (req, res) {
  let myquery = { co_supervisor: Object(req.params.cosupervisor) }

  Group.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/student/:student').get(function (req, res) {
  let myquery = { first: Object(req.params.student) } || {
      second: Object(req.params.student),
    } || { third: Object(req.params.student) } || {
      forth: Object(req.params.student),
    }

  Group.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/update/:id').post((req, res) => {
  Group.findById(req.params.id)
    .then((groups) => {
      groups.panelMember = req.body.panelMember

      groups
        .save()
        .then(() => res.json('Panel Member Allocated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/searchByGid/:gid').get((req, res) => {
  let myquery = {
    gid: Object(req.params.gid),
  }
  Group.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/updateSupervisor/:id').post((req, res) => {
  Group.findById(req.params.id)
    .then((groups) => {
      groups.supervisor = req.body.supervisor

      groups
        .save()
        .then(() => res.json('Supervisor Allocated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/updateCoSupervisor/:id').post((req, res) => {
  Group.findById(req.params.id)
    .then((groups) => {
      groups.co_supervisor = req.body.co_supervisor

      groups
        .save()
        .then(() => res.json('Co-Supervisor Allocated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
