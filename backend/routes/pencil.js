const express = require("express");
const {
  reportChild,
  getAllComplaints,
  createComplaint,
  getComplaintById,
  updateComplaint,
} = require("../controller/pencil");
const { getNodalCount } = require("../controller/stats");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/report", isAuthenticated, reportChild);
router.get("/", isAuthenticated, async (req, res) => {});
router.get("/complaints", isAuthenticated, isAdmin, getAllComplaints);
router.post("/complaints", createComplaint);
router.get("/complaints/:id", isAuthenticated, isAdmin, getComplaintById);
router.put("/complaints/:id", isAuthenticated, isAdmin, updateComplaint);
router.post("/stats/nodalCount", isAuthenticated, getNodalCount);

module.exports = router;
