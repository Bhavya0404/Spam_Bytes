const mongoose = require("mongoose");

const foundchild = mongoose.Schema(
  {
    address: String,
    foundDate: {
      type: Date,
      default: Date.now,
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("childfound", foundchild);
