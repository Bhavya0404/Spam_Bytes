const mongoose = require("mongoose");

const foundchild = mongoose.Schema(
  {
    name: {
      type: String,
      default: 'N/A'
    },
    description: String,
    img: {
      data: Buffer,
      contentType: String,
    },
    address: String,
    state: String,
    district: String,
    lastKnownLocation: {
      type: Array,
      default: [0.0, 0.0],
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("childFound", foundchild);
