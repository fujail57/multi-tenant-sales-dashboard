const express = require("express");
const authCheckRoutes = express.Router();

authCheckRoutes.get("/me", (req, res) => {
  res.json({
    isAuth: true,
    role: req.user.role, // "admin" | "agent"
    user: {
      email: req.user.email,
      id: req.user._id,
    },
  });
});

// :::::::::::::::::::::: EXPORT ::::::::::::::::::::::::
module.exports = { authCheckRoutes };
