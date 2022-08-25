const express = require('express');
const { getNgo, getNgoProfile } = require('../controller/ngo');
const { isAuthenticated } = require('../middleware/auth');
const {assignScheme} = require('../controller/pencil');

const router = express.Router();

// router.get('/', getNgo);
router.get('/', isAuthenticated  ,getNgoProfile);
router.put('/assign/:id', isAuthenticated, assignScheme);



module.exports = router;