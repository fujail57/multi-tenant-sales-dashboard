const express = require("express");
const leadsRoutes = express.Router();
const leadsControllers = require("../controllers/leadsControllers");
const { isAuthorisedRole } = require("../middleware/isAuthorisedRole");

// :::::::::::::::::::::: ROUTES ::::::::::::::::::::::::

// :::::::::::::::::::::: leads list ::::::::::::::::::::::::
leadsRoutes.get(
  "/leads",
  isAuthorisedRole("admin", "agent"),
  leadsControllers.handleGetAllLeads
);

leadsRoutes.get(
  "/my-leads",
  isAuthorisedRole("admin", "agent"),
  leadsControllers.handleGetMyLeads
);

leadsRoutes.post(
  "/lead-add",
  isAuthorisedRole("admin", "agent"),
  leadsControllers.handlePostNewLead
);

leadsRoutes.get(
  "/lead/:id",
  isAuthorisedRole("admin", "agent"),
  leadsControllers.handleGetLeadById
);

leadsRoutes
  .route("/lead/:id")
  .all(isAuthorisedRole("admin"))
  .put(leadsControllers.handleUpdateLeadById)
  .delete(leadsControllers.handleDeleteLeadById);

// :::::::::::::::::::::: EXPORT ::::::::::::::::::::::::
module.exports = { leadsRoutes };
