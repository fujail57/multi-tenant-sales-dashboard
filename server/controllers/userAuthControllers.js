const bcrypt = require("bcryptjs");
// local module
const UserDb = require("../models/userDb");
const { generateToken } = require("../middleware/generateToken");

//  :: Register agent/user :::::::::::::::::::::
exports.handlePostSignup = async (req, res) => {
  const { name, email, password, tenantName } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required " });
  }
  const userExist = await UserDb.findOne({ email });
  if (userExist) return res.status(400).json({ message: "User already exist" });

  try {
    await UserDb.create({
      name,
      email,
      password,
      tenantName,
      // tenantId: req.user.id,
    });
    return res.status(201).json({ message: "User registerd successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//  :: Login agent/user ::::::::::::::

exports.handlePostLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await UserDb.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
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
    res.status(500).json({ message: error.message });
  }
};

//  :: Logout agent/user :::::::::::::::::::
exports.handlePostLogout = async (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
};
