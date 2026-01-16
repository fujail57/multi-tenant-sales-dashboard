const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tenantName: {
      type: String,
    },

    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tenant",
    },
    role: {
      type: String,
      enum: ["agent", "user"],
      default: "agent",
    },
  },
  { timestamps: true }
);

//  :::::::::::::::::::

userSchema.pre("save", async function (next) {
  const User = this;
  if (!User.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(User.password, salt);
    User.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const UserDb = mongoose.model("user", userSchema);

module.exports = UserDb;
