const express = require("express");
const userController = require("../controllers/usersController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/all", userController.getAllUsers);

router.post("/save-business", verifyToken, userController.saveBusiness);
router.delete("/unsave-business", verifyToken, userController.unsaveBusiness);
router.get("/saved-businesses", verifyToken, userController.getSavedBusinesses);

module.exports = router;
