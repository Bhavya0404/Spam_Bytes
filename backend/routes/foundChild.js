const express = require('express')
const {
  getfoundChildData,
  updateFoundChild,
} = require('../controller/foundChild')
const { isAvailable } = require('../middleware/childAvailable')

const router = express.Router()
router.get('/', getfoundChildData)
router.put('/:id', isAvailable, updateFoundChild)
module.exports = router
