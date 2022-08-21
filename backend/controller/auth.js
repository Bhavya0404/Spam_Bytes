const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userModel = require("../model/userSchema");
const { sendMailResetPassword } = require("../controller/mail");
const tokenModel = require("../model/token");
const nodalOfficer = require("../model/nodalOfficer");

// Validators
const loginValidator = require("../validation/loginUserValidator");
const registerValidator = require("../validation/registerUserValidator");
const logger = require("../logger");

const CLIENT_URI = "http://localhost:3000";

const forgotPassword = async (req, res) => {
  const body = req?.body;
  const email = body?.email;
  const exists = await userModel.findOne({ email }).exec();
  if (!exists) {
    return res.status(404).json({ message: "Email not Found" });
  }
  let token = await tokenModel.findOne({ userId: exists?._id });
  if (token) {
    await token.deleteOne();
  }
  try {
    let resetToken = crypto.randomBytes(32).toString("hex");
    const rtHash = await argon2.hash(resetToken);
    await new tokenModel({
      userId: exists?._id,
      token: rtHash,
      createdAt: Date.now(),
    }).save();
    const body = `Someone (Hopefully you) has requested a Password Reset, kindly click here to reset the password ${CLIENT_URI}/passwordReset/${resetToken}/${exists?._id} if you did not request the reset, kindly ignore this email`;
    await sendMailResetPassword(email, "Password Reset Requested", body);
    return res
      .status(200)
      .send({ message: "Password Reset Mail Sent, kindly Check" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Error Occurred" });
  }
};

const resetPassword = async (req, res) => {
  const userId = req?.body?.userId;
  const token = req?.body?.token;
  let newPassword = req?.body?.password;

  let passwordResetToken = await tokenModel.findOne({ userId }).exec();
  if (!passwordResetToken) {
    return res.status(404).json({ message: "Token Invalid or Expired" });
  }
  const isValid = await argon2.verify(passwordResetToken?.token, token);
  if (!isValid) {
    return res
      .status(403)
      .json({ message: "Token Invalid or Expired (isValid Error)" });
  }
  const user = await userModel.findById(userId);
  newPassword = await argon2.hash(newPassword);
  user.password = newPassword;
  await user.save();
  await passwordResetToken.deleteOne();
  return res.status(200).json({ message: "Password Reset Successful" });
};

const changePassword = async (req, res) => {
  const body = req?.body;
  const id = req?.user?._id;
  let newpassword = body?.password;
  const confirmPassword = body?.cpassword;
  const oldPassword = body?.oldpassword;

  try {
    if (newpassword !== confirmPassword) {
      return res.status(500).json({ message: "Passwords mismatch" });
    }
    const user = await userModel.findById(id).exec();

    if (!user) {
      return res.status(403).json({ message: "Invalid ID" });
    }
    const valid = await argon2.verify(user.password, oldPassword);
    if (!valid) {
      return res.status(403).json({ message: "Old Password mismatch" });
    }
    newpassword = await argon2.hash(newpassword);
    user.password = newpassword;
    await user.save();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
};

const modifyProfile = async (req, res) => {
  const body = req?.body;
  const id = req?.user?._id;

  try {
    let user = await userModel.findById(id).exec();

    if (!user) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    await userModel.updateOne({ _id: id }, body).exec();
    return res
      .status(200)
      .json({ message: `User w/ id ${id} Updated Successfully` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
};

const registerAdmin = async (req, res) => {
  const body = req?.body;
  const email = body?.email;
  let password = body?.password;
  const confirmPassword = body?.cpassword;
  const name = body?.name;
  const phoneNumber = body?.phoneNumber;
  const acType = "ADMIN";
  const isAdmin = true;

  // TODO: Add Validation

  try {
    if (password !== confirmPassword) {
      return res.status(500).send({ error: "Passwords mismatch", code: 500 });
    }

    let data = {
      email,
      password,
      isAdmin,
      acType,
      name,
      phoneNumber,
    };

    await registerValidator.validateAsync(data);
    password = await argon2.hash(password);

    data = { ...data, password };
    const newUser = await userModel(data);
    await newUser.save();
    logger.info("New Admin Created");
    return res.status(201).send({ newUser });
  } catch (err) {
    logger.error(err);
    return res.status(500).send({ error: err, code: 500 });
  }
};

const registerUser = async (req, res) => {
  const body = req.body;

  const email = body?.email;
  let password = body?.password;
  const confirmPassword = body?.cpassword;
  const name = body?.name;
  const phoneNumber = body?.phoneNumber;

  // TODO: Add Validation

  try {
    if (password !== confirmPassword) {
      return res.status(500).send({ error: "Passwords mismatch", code: 500 });
    }
    let data = {
      email,
      password,
      name,
      phoneNumber,
      acType: "IN",
    };

    await registerValidator.validateAsync(data);
    password = await argon2.hash(password);

    data = { ...data, password };
    const newUser = await userModel(data);
    await newUser.save();
    logger.info("New User Created");

    return res.status(201).send({ newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err, code: 500 });
  }
};

const login = async (req, res) => {
  const body = req.body;

  const email = body?.email;
  const password = body?.password;

  // TODO: Add Validation

  try {
    await loginValidator.validateAsync({ email, password });
    const user = await userModel.findOne({ email }).exec();
    if (!user) return res.status(403).send({ message: "Invalid Email" });

    const password_hash = user?.password;
    if (!(await argon2.verify(password_hash, password)))
      return res.status(403).send({ message: "Invalid Password" });

    const uData = {
      _id: user?._id,
      username: user?.username,
      name: user?.name,
      acType: user?.acType,
      isAdmin: user?.isAdmin,
      phoneNumber: user?.phoneNumber,
    };
    const token = jwt.sign(uData, process.env.JWT_SECRET);
    return res.status(200).send({ token, user });
  } catch (err) {
    logger.error(err);
    return res.status(500).send({ message: err });
  }
};

module.exports = {
  forgotPassword,
  resetPassword,
  changePassword,
  modifyProfile,
  registerAdmin,
  registerUser,
  login,
};
