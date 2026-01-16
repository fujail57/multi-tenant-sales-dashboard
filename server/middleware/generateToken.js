const jwt = require("jsonwebtoken");

exports.generateToken = (userData) => {
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "1d" });
};
