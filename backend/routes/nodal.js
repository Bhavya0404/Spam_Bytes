const { getNodal, verifyChild } = require('../controller/nodal');
const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createContact } = require('../controller/payements');

const router = express.Router();

router.get('/', getNodal);
router.put('/verify/:id', isAuthenticated, verifyChild)
router.post('/createContact', createContact)

module.exports = router;