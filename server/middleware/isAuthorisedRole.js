exports.isAuthorisedRole = (...roles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !req.user.role) {
        return res.status(401).json({ message: "Unauthorized: no user data" });
      }

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          message: `Access denied: role '${req.user.role}' is not allowed`,
        });
      }
      next(); //allow access
    } catch (error) {
      console.error("Authorization error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};
