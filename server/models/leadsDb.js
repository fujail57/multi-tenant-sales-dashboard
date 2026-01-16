const mongoose = require("mongoose");

// Orders schema
const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },

    phone: {
      type: String,
      unique: true,
    },

    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tenant",
    },

    status: {
      type: String,
      enum: ["pending", "new", "completed"],
      default: "new",
    },
  },
  { timestamps: true }
);

//  create model
const LeadDb = mongoose.model("lead", leadSchema);

module.exports = LeadDb;
