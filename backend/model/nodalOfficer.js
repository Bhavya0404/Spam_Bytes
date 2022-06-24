const mongoose = require("mongoose");

const nodalOfficer = mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    email: String,
    state: String,
    district: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("nodalOfficer", nodalOfficer);
