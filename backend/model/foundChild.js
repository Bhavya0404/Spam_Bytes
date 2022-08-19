const mongoose = require("mongoose");

const foundchild = mongoose.Schema(
  {
    name: {
      type: String,
      default: 'N/A'
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
      required: false
    },
    rzp_contactId: String,
    rzp_fundAcId: String,
    payouts: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("childFound", foundchild);
