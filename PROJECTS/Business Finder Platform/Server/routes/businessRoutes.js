const express = require("express");
const businessController = require("../controllers/businessController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// routes for businesses
router.get("/", businessController.getAllBusinesses);
router.get("/:id", businessController.getBusinessById);
router.post("/create", verifyToken, businessController.createBusiness);
router.put("/:id", verifyToken, businessController.updateBusiness);
router.delete("/:id", verifyToken, businessController.deleteBusiness);

// routes for comments
router.post("/comment", verifyToken, businessController.addComment);
router.get("/:id/all-comments", businessController.getComments);

// subscription:
router.post("/subscribe", verifyToken, businessController.subscribeToBusiness);
router.post(
  "/unsubscribe",
  verifyToken,
  businessController.unsubscribeFromBusiness
);
router.get("/subscribers/:id", verifyToken, businessController.getSubscribers);

module.exports = router;
