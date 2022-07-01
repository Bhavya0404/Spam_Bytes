const express = require('express');
const { getNgo } = require('../controller/ngo');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();

router.get('/', getNgo);


module.exports = router;