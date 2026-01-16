const express = require("express");
const tenantAuthRoutes = express.Router();

const tenantAuthControllers = require("../controllers/tenantAuthControllers");

// routes
tenantAuthRoutes.post("/register", tenantAuthControllers.handlePostSignup);
tenantAuthRoutes.post("/login", tenantAuthControllers.handlePostLogin);
tenantAuthRoutes.post("/logout", tenantAuthControllers.handlePostLogout);

module.exports = { tenantAuthRoutes };
