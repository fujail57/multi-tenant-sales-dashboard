const express = require("express");
const logsRoutes = express.Router();
const callLogsControllers = require("../controllers/callLogsControllers");
const { isAuthorisedRole } = require("../middleware/isAuthorisedRole");

// :::::::::::::::::::::: ROUTES ::::::::::::::::::::::::

// :::::::::::::::::::::: logs list ::::::::::::::::::::::::
logsRoutes.get(
  "/logs",
  isAuthorisedRole("admin", "agent"),
  callLogsControllers.handleGetAllLogs
);

logsRoutes.get(
  "/my-logs",
  isAuthorisedRole("admin", "agent"),
  callLogsControllers.handleGetMyLogs
);

logsRoutes.post(
  "/log-add",
  isAuthorisedRole("admin"),
  callLogsControllers.handlePostNewLogs
);

logsRoutes.get(
  "/log/:id",
  isAuthorisedRole("admin", "agent"),
  callLogsControllers.handleGetLogById
);

logsRoutes
  .route("/log/:id")
  .all(isAuthorisedRole("admin"))
  .put(callLogsControllers.handleUpdateLogById)
  .delete(callLogsControllers.handleDeleteLogById);

// :::::::::::::::::::::: EXPORT ::::::::::::::::::::::::
module.exports = { logsRoutes };
