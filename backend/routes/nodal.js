const { getNodal } = require('../controller/nodal');
const express = require('express');

const router = express.Router();

router.get('/', getNodal);

module.exports = router;