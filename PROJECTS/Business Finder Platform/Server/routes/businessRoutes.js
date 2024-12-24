const express = require("express");
const businessController = require("../controllers/businessController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", businessController.getAllBusinesses);
router.post("/create", verifyToken, businessController.createBusiness);
router.put("/:id", verifyToken, businessController.updateBusiness);
router.delete("/:id", verifyToken, businessController.deleteBusiness);

module.exports = router;
