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

  getBusinessById: async (req, res) => {
    const { id } = req.params;
    try {
      const business = await Business.findById(id);
      res.json(business);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createBusiness: async (req, res) => {
    try {
      console.log("Request body:", req.body); // Debug log
      console.log("Authenticated user:", req.user); // Verify user data from token

      const { name, description, category } = req.body;

      if (!name || !description || !category) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newBusiness = new Business({
        name,
        description,
        category,
        owner: req.user.id, // User info should be attached by the middleware
      });

      await newBusiness.save();
      res.status(201).json(newBusiness);
    } catch (err) {
      console.error("Error creating business:", err);
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

  // Add a comment to a business
  addComment: async (req, res) => {
    try {
      const { businessId, comment } = req.body;

      // Ensure the business exists
      const business = await Business.findById(businessId);
      if (!business) {
        return res.status(404).json({ message: "Business not found" });
      }

      // Add the comment
      const newComment = {
        userId: req.user.id, // Assuming req.user is populated by the verifyToken middleware
        comment,
      };
      business.reviews.push(newComment);
      await business.save();

      res.status(201).json({
        message: "Comment added successfully",
        reviews: business.reviews,
      });
    } catch (err) {
      console.error("Error adding comment:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // Get comments for a business
  getComments: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the business and populate reviews
      const business = await Business.findById(id).populate(
        "reviews.userId",
        "name email"
      );
      if (!business) {
        return res.status(404).json({ message: "Business not found" });
      }

      res.json(business.reviews);
    } catch (err) {
      console.error("Error fetching comments:", err);
      res.status(500).json({ error: err.message });
    }
  },

  subscribeToBusiness: async (req, res) => {
    try {
      const { businessId } = req.body;
      const userId = req.user.id;

      const business = await Business.findById(businessId);
      if (!business)
        return res.status(404).json({ message: "Business not found" });

      if (business.subscribers.includes(userId)) {
        return res.status(400).json({ message: "Already subscribed" });
      }

      business.subscribers.push(userId);
      await business.save();

      res.status(200).json({ message: "Subscribed successfully", business });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },

  unsubscribeFromBusiness: async (req, res) => {
    try {
      const { businessId } = req.body;
      const userId = req.user.id;

      const business = await Business.findById(businessId);
      if (!business)
        return res.status(404).json({ message: "Business not found" });

      if (!business.subscribers.includes(userId)) {
        return res.status(400).json({ message: "Not subscribed" });
      }

      business.subscribers = business.subscribers.filter(
        (subscriberId) => subscriberId.toString() !== userId
      );
      await business.save();

      res.status(200).json({ message: "Unsubscribed successfully", business });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },

  getSubscribers: async (req, res) => {
    try {
      const business = await Business.findById(req.params.id).populate(
        "subscribers",
        "name email"
      );
      if (!business)
        return res.status(404).json({ message: "Business not found" });

      res.status(200).json(business.subscribers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = businessController;
