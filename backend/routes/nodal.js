const { getNodal, verifyChild } = require('../controller/nodal');
const express = require('express');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();

router.get('/', getNodal);
router.put('/verify/:id', isAuthenticated, verifyChild)

module.exports = router;