const { getNodal, verifyChild, updateChild, getNodalProfile } = require("../controller/nodal");
const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { createContact, addBankDetails, processPayout, getPayoutStatus } = require("../controller/payements");

const router = express.Router();

router.get("/", isAuthenticated, isAdmin, getNodalProfile);
router.put("/verify/:id", verifyChild);
router.post("/createContact", createContact);
router.post("/addBankAc", addBankDetails);
router.post("/processPayout", processPayout);
router.get('/payoutStatus/:id', getPayoutStatus);
router.put('/child/:id', updateChild);

module.exports = router;
