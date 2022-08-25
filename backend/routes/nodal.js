const { getNodal, verifyChild, updateChild, getNodalProfile } = require("../controller/nodal");
const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { createContact, addBankDetails, processPayout, getPayoutStatus } = require("../controller/payements");
const { fifteemdayemail } = require("../controller/mail");

const router = express.Router();

router.get("/", isAuthenticated, isAdmin, getNodalProfile);
router.put("/verify/:id", isAuthenticated, isAdmin, verifyChild);
router.post("/createContact", isAuthenticated, isAdmin, createContact);
router.post("/addBankAc", isAuthenticated, isAdmin, addBankDetails);
router.post("/processPayout", isAuthenticated, isAdmin, processPayout);
router.get('/payoutStatus/:id', isAuthenticated, isAdmin, getPayoutStatus);
router.put('/child/:id', isAuthenticated, isAdmin, updateChild);
router.put('/fifteendays', isAuthenticated, isAdmin, fifteemdayemail);

module.exports = router;
