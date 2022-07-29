const express = require('express');
const { getNgo, getNgoProfile } = require('../controller/ngo');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();

// router.get('/', getNgo);
router.get('/', isAuthenticated  ,getNgoProfile);



module.exports = router;