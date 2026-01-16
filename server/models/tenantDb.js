const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// create schema
const tenantSchema = new mongoose.Schema(
  {
    tenantName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["admin", "agent"],
      default: "admin",
    },
  },
  { timestamps: true }
);

// :::: Hash password
tenantSchema.pre("save", async function (next) {
  const tenant = this;
  if (!tenant.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(tenant.password, salt);
    tenant.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// create model
const TenantDB = mongoose.model("tenant", tenantSchema);

module.exports = TenantDB;
