const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    aadhar_no: {
      type: String,
      required: true,
    },
    description: String,
    resolved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('complaints', schema);
