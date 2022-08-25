const express = require("express");
const {
  reportChild,
  getAllComplaints,
  createComplaint,
} = require("../controller/pencil");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/report", isAuthenticated, reportChild);
router.get("/", isAuthenticated, async (req, res) => {});
router.get("/complaints", isAuthenticated, isAdmin, getAllComplaints);
router.post("/complaints", createComplaint);

module.exports = router;
