const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authController = {
  signup: async (req, res) => {
    try {
      const { name, email, password, plan } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword, plan });
      await user.save();
      res
        .status(201)
        .json({ message: "User registered successfully", user: user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      console.log("Generated Token:", token); // Debug log

      res.cookie("authToken", token, {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      console.log("Set-Cookie header sent"); // Debug log

      res.json({
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          plan: user.plan,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      // Clear the authToken cookie
      res.clearCookie("authToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      res.json({ message: "Logout successful" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  me: async (req, res) => {
    try {
      const token = req.cookies.authToken;
      if (!token) return res.status(401).json({ message: "Unauthorized" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });

      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = authController;
