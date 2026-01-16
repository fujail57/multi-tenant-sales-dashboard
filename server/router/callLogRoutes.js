const express = require("express");
const logsRoutes = express.Router();
const callLogsControllers = require("../controllers/callLogsControllers");
const { isAuthorisedRole } = require("../middleware/isAuthorisedRole");

// :::::::::::::::::::::: ROUTES ::::::::::::::::::::::::

//  :::: Agent :::::::::::
logsRoutes.get(
  "/logs",
  isAuthorisedRole("agent", "admin"),
  callLogsControllers.handleGetAllLogs
);

//  :::: Admin :::::::::::
logsRoutes.post(
  "/log-add",
  isAuthorisedRole("admin"),
  callLogsControllers.handlePostNewLogs
);

logsRoutes
  .route("/log/:id")
  .all(isAuthorisedRole("admin"))
  .put(callLogsControllers.handleUpdateLogById)
  .delete(callLogsControllers.handleDeleteLogById);

//  :::: Admin/agent :::::::::::
logsRoutes.get(
  "/my-logs",
  isAuthorisedRole("admin", "agent"),
  callLogsControllers.handleGetMyLogs
);

logsRoutes.get(
  "/log/:id",
  isAuthorisedRole("admin", "agent"),
  callLogsControllers.handleGetLogById
);

// :::::::::::::::::::::: EXPORT ::::::::::::::::::::::::
module.exports = { logsRoutes };
