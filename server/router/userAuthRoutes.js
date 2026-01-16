const express = require("express");
const userAuthRoutes = express.Router();

const userAuthControllers = require("../controllers/userAuthControllers");

// routes
userAuthRoutes.post("/register", userAuthControllers.handlePostSignup);
userAuthRoutes.post("/login", userAuthControllers.handlePostLogin);
userAuthRoutes.post("/logout", userAuthControllers.handlePostLogout);

module.exports = { userAuthRoutes };
