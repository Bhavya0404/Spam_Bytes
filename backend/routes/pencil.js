const express = require("express");
const { reportChild } = require("../controller/pencil");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.post("/report", isAuthenticated, reportChild);
router.get("/", isAuthenticated, async (req, res) => {});

module.exports = router;
