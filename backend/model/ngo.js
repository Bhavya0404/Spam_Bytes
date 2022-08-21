const mongoose = require("mongoose");

const ngo = mongoose.Schema(
  {
    name: String,
    address: String,
    isVerified: {
      type: Boolean,
      default: true,
    },
    state: String,
    district: String,
    location: {type: Array, default: [0.0, 0.0]},
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("ngo", ngo);
