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
    isVerified: Boolean,
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isVerified: Boolean
  },
  { timestamps: true }
);
module.exports = mongoose.model("childFound", foundchild);
