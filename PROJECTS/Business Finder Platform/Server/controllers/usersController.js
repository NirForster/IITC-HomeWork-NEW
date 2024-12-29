const User = require("../models/User");
const Business = require("../models/Business");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  saveBusiness: async (req, res) => {
    try {
      const { businessId } = req.body;

      // Ensure the business exists
      const business = await Business.findById(businessId);
      if (!business) {
        return res.status(404).json({ message: "Business not found" });
      }

      // Add the business to the user's savedBusinesses
      const user = await User.findByIdAndUpdate(
        req.user.id, // Assuming req.user is populated by verifyToken middleware
        { $addToSet: { savedBusinesses: businessId } }, // Prevent duplicates
        { new: true } // Return the updated document
      ).populate("savedBusinesses"); // Populate saved businesses for convenience

      res.json({
        message: "Business saved successfully",
        savedBusinesses: user.savedBusinesses,
      });
    } catch (err) {
      console.error("Error saving business:", err);
      res.status(500).json({ error: err.message });
    }
  },

  unsaveBusiness: async (req, res) => {
    try {
      const { businessId } = req.body;

      // Remove the business from the user's savedBusinesses
      const user = await User.findByIdAndUpdate(
        req.user.id, // Assuming req.user is populated by verifyToken middleware
        { $pull: { savedBusinesses: businessId } },
        { new: true } // Return the updated document
      ).populate("savedBusinesses");

      res.json({
        message: "Business unsaved successfully",
        savedBusinesses: user.savedBusinesses,
      });
    } catch (err) {
      console.error("Error unsaving business:", err);
      res.status(500).json({ error: err.message });
    }
  },

  getSavedBusinesses: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).populate("savedBusinesses");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(user.savedBusinesses);
    } catch (err) {
      console.error("Error fetching saved businesses:", err);
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
