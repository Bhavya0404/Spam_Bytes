const mongoose = require("mongoose");
const schemesModel = require("./schemes");

const foundchild = mongoose.Schema(
  {
    name: {
      type: String,
      default: "N/A",
    },
    description: String,
    img: String,
    address: String,
    state: String,
    district: String,
    lastKnownLocation: {
      type: Array,
      default: [0.0, 0.0],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
    hasHousing: {
      type: Boolean,
      default: false,
    },
    inSchool: {
      type: Boolean,
      default: false,
    },
    compCompleted: {
      type: Boolean,
      default: false,
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    rzp_contactId: String,
    rzp_fundAcId: String,
    payouts: {
      type: Array,
      default: [],
    },
    aadhar_no: String,
    acceptedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ngo",
    },
    schemes: {
      type: Array,
      default: [schemesModel],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("childFound", foundchild);
