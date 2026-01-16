// External Module
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Local Module
const { connectToMongoDb } = require("./connection");

const { isAuthenticated } = require("./middleware/isAuthenticated");
// const { isAuthorisedRole } = require("./middleware/isAuthorisedRole");

const { userAuthRoutes } = require("./router/userAuthRoutes");
const { tenantAuthRoutes } = require("./router/tenantAuthRoutes");
const { leadsRoutes } = require("./router/leadRoutes");
const { logsRoutes } = require("./router/callLogRoutes");
const { authCheckRoutes } = require("./router/authCheck");

// Connections
connectToMongoDb(process.env.MONGO_URL);

// Middleweare
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// API
app.use("/api/auth", tenantAuthRoutes);
app.use("/api/user", userAuthRoutes);

app.use("/api", isAuthenticated, authCheckRoutes);
// Auth API
app.use("/api", isAuthenticated, leadsRoutes);
app.use("/api", isAuthenticated, logsRoutes);

// 404 - Page not found
app.use((req, res, next) => {
  res.json({ message: "404 - Page not found" });
  next();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
