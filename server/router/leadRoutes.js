const express = require("express");
const leadsRoutes = express.Router();
const leadsControllers = require("../controllers/leadsControllers");
const { isAuthorisedRole } = require("../middleware/isAuthorisedRole");

// :::::::::::::::::::::: ROUTES ::::::::::::::::::::::::

//  :::: Agent :::::::::::
leadsRoutes.get(
  "/leads",
  isAuthorisedRole("agent", "admin"),
  leadsControllers.handleGetAllLeads
);

//  :::: Admin / Agent :::::::::::

leadsRoutes.get(
  "/my-leads",
  isAuthorisedRole("admin", "agent"),
  leadsControllers.handleGetMyLeads
);

leadsRoutes.get(
  "/lead/:id",
  isAuthorisedRole("admin", "agent"),
  leadsControllers.handleGetLeadById
);

//  :::: Admin :::::::::::
leadsRoutes.post(
  "/lead-add",
  isAuthorisedRole("admin"),
  leadsControllers.handlePostNewLead
);

leadsRoutes
  .route("/lead/:id")
  .all(isAuthorisedRole("admin"))
  .put(leadsControllers.handleUpdateLeadById)
  .delete(leadsControllers.handleDeleteLeadById);

// :::::::::::::::::::::: EXPORT ::::::::::::::::::::::::
module.exports = { leadsRoutes };
