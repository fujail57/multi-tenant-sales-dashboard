const bcrypt = require("bcryptjs");
// local module);
const TenantDB = require("../models/tenantDb");
const { generateToken } = require("../middleware/generateToken");

//  :: Register Organization/Tenant ::
exports.handlePostSignup = async (req, res) => {
  const { tenantName, email, password } = req.body;

  if (!tenantName || !email || !password) {
    return res.status(400).json({ message: "All fields are required " });
  }
  const tenantExist = await TenantDB.findOne({ email });
  if (tenantExist)
    return res.status(400).json({ message: "Tenant already exist" });

  try {
    await TenantDB.create({
      tenantName,
      email,
      password,
    });
    return res.status(201).json({ message: "Tenant registerd successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//  :: Login Organization/Tenant ::

exports.handlePostLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await TenantDB.findOne({ email });
    if (!user) return res.status(400).json({ message: "Tenant not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const payload = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    const token = generateToken(payload);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    return res
      .status(200)
      .json({ message: "Login successfully", role: user.role });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

//  :: Logout Organization/Tenant ::
exports.handlePostLogout = async (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
};
