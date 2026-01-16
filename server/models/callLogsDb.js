const mongoose = require("mongoose");

// Orders schema
const logsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    date: {
      type: String,
    },

    duration: {
      type: String,
    },
    outcome: {
      type: String,
    },

    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tenant",
    },
  },
  { timestamps: true }
);

//  create model
const CallLogDb = mongoose.model("log", logsSchema);

module.exports = CallLogDb;
