const mongoose = require("mongoose");

const nodalOfficer = mongoose.Schema(
  {
    user: {},
    state: String,
    district: String,
    officeLocation: {type: Array, default: [0.0, 0.0]}
  },
  { timestamps: true }
);

module.exports = mongoose.model("nodalOfficer", nodalOfficer);