const express = require('express')
const {
  getfoundChildData,
  updateFoundChild,
} = require('../controller/foundChild')

const router = express.Router()
router.get('/', getfoundChildData)
router.put('/:id', updateFoundChild)
module.exports = router
