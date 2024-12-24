const Business = require("../models/Business");

const businessController = {
  getAllBusinesses: async (req, res) => {
    try {
      const businesses = await Business.find();
      res.json(businesses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createBusiness: async (req, res) => {
    try {
      const { name, description, category } = req.body;
      const newBusiness = new Business({
        name,
        description,
        category,
        owner: req.user.id,
      });
      await newBusiness.save();
      res.status(201).json(newBusiness);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateBusiness: async (req, res) => {
    try {
      const updatedBusiness = await Business.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedBusiness);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteBusiness: async (req, res) => {
    try {
      await Business.findByIdAndDelete(req.params.id);
      res.json({ message: "Business deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = businessController;
