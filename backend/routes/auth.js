const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { middleware } = require("../middleware/simple");
const {
  forgotPassword,
  resetPassword,
  changePassword,
  registerAdmin,
  registerUser,
  login,
  modifyProfile,
} = require("../controller/auth");
const userSchema = require("../model/userSchema");

const router = express.Router();
router.post("/login", login);
router.get("/", isAuthenticated, async (req, res) => {
  const user = await userSchema.findById(req?.user?._id).exec();

  return res.status(200).send({ user });
});
router.post("/register", registerUser);
router.post("/registerAdmin", isAuthenticated, isAdmin, registerAdmin);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/modifyprofile", isAuthenticated, modifyProfile);
router.get("/chkAuth", isAuthenticated, async (req, res) => {
  const user = await userSchema.findById(req?.user?._id).exec();
  return res.status(200).send({ loggedIn: req?.user ? true : false, user });
});

module.exports = router;
