const express = require('express')
const { getfoundChildData } = require('../controller/foundChild')

const router = express.Router();
router.get('/', getfoundChildData);

module.exports = router;