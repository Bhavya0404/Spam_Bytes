const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userModel = require("../model/userSchema");
const { sendMailResetPassword } = require("../controller/mail");
const tokenModel = require("../model/token");

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
  const newPassword = req?.body?.password;

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
  const hash = await argon2.hash(newPassword);
  await userModel.updateOne({ _id: userId }, { $set: { password: hash } });
  await passwordResetToken.deleteOne();
  return res.status(200).json({ message: "Password Reset Successful" });
};

const changePassword = async (req, res) => {
  const body = req?.body;
  const email = body?.email;
  const newpassword = body?.password;
  const confirmPassword = body?.cpassword;

  try {
    if (newpassword !== confirmPassword) {
      return res.status(500).send({ error: "Passwords mismatch", code: 500 });
    }
    const hash = await argon2.hash(newpassword);
    const user = await userModel.findOne({ email }).exec();
    //console.log("a");
    if (!user) {
      return res.status(403).send({ error: "Invalid Email", code: 403 });
    }
    user.password = hash;
    await user.save();
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err, code: 500 });
  }
};

const registerAdmin = async (req, res) => {
  const body = req?.body;
  const email = body?.email;
  const password = body?.password;
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
    const hash = await argon2.hash(password);
    const newUser = await userModel({
      email,
      password: hash,
      isAdmin,
      acType,
      name,
      phoneNumber,
    });
    await newUser.save();

    return res.status(201).send({ newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err, code: 500 });
  }
};

const registerUser = async (req, res) => {
  const body = req.body;

  const email = body?.email;
  const password = body?.password;
  const confirmPassword = body?.cpassword;
  const name = body?.name;
  const phoneNumber = body?.phoneNumber;

  // TODO: Add Validation

  try {
    if (password !== confirmPassword) {
      return res.status(500).send({ error: "Passwords mismatch", code: 500 });
    }
    const hash = await argon2.hash(password);
    const newUser = await userModel({
      email,
      password: hash,
      name,
      phoneNumber,
      acType,
    });
    await newUser.save();

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
    const user = await userModel.findOne({ email }).exec();
    if (!user)
      return res.status(403).send({ error: "Invalid Email", code: 403 });

    const password_hash = user?.password;
    if (!(await argon2.verify(password_hash, password)))
      return res.status(403).send({ error: "Invalid Password", code: 403 });

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
    console.error(err);
    return res.status(500).send({ error: err, code: 500 });
  }
};

module.exports = {
  forgotPassword,
  resetPassword,
  changePassword,
  registerAdmin,
  registerUser,
  login,
};
