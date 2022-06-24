const mongoose = require("mongoose");

const ngo = mongoose.Schema(
  {
    name: String,
    address: String,
    isVerified: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ngo", ngo);
