const argon2 = require("argon2");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    name: String,
    phoneNumber: String,
    acType: {
      type: String,
      enum: ["ADMIN", "IN", "NGO"],
      default: "IN",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async (next) => {
  if (this.password && this.isModified("password")) {
    this.password = await argon2.hash(this.password);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
