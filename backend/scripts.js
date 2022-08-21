const nodalOfficer = require("./model/nodalOfficer");
const userModel = require("./model/userSchema");
const ngoModel = require("./model/ngo");
const argon2 = require("argon2");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sihuser:sihuser@cluster0.iytwb.mongodb.net/sih?retryWrites=true&w=majority')

const addToNodalOfficer = async (id, state, district, coordinates) => {
  const user = await userModel.findById(id).exec();
  if (!user) {
    process.stdout.write("Error");
    return;
  }

  const newNodal = await nodalOfficer({
    user,
    state,
    district,
    officeLocation: coordinates,
  });

  await newNodal.save();
  process.stdout.write("Saved :))\n");
  return;
};

const addToUserModel = async (name, email, password, phoneNumber) => {
  try {
    if (password !== confirmPassword) {
      process.stdout.write("Passwords mismatch");
      return;
    }
    password = await argon2.hash(password);
    const newUser = await userModel({
      email,
      password,
      name,
      phoneNumber,
      acType: "IN",
    });
    await newUser.save();

    return process.stdout.write("User Created");
  } catch (err) {
    return process.stderr.write(err);
  }
};

const addToNgoModel = async (id, name, address, state, district) => {
  const user = await userModel.findById(id).exec();
  if (!user) {
    process.stdout.write("Error");
    return;
  }

  const newNgo = await ngoModel({
    user,
    name,
    address,
    state,
    district,
  });

  await newNgo.save();
  return process.stdout.write("NGO Created\n");
};

addToNodalOfficer(
  "62fe4eb7f8ae682df6f9b751",
  "Uttar Pradesh",
  "Gautam Buddha Nagar",
  [77.3317, 28.5718]
);
// addToUserModel("", "", "", "");
addToNgoModel(
  "62fe4ebff8ae682df6f9b753",
  "N.G.O. Test 1",
  "NB/1-2, Sec 89",
  "Uttar Pradesh",
  "Gautam Buddha Nagar",
  [0,0]
);
