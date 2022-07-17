const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { middleware } = require("../middleware/simple");
const { forgotPassword, resetPassword, changePassword, registerAdmin, registerUser, login } = require("../controller/auth");

const router = express.Router();
router.post("/login", login);
router.get("/", isAuthenticated, (req, res) => {
  const user = req?.user;
  return res.status(200).send({ user });
});
router.post("/register", registerUser);
router.post("/registerAdmin", isAuthenticated, isAdmin, registerAdmin);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);
router.post("/changepassword", middleware, changePassword);

module.exports = router;
