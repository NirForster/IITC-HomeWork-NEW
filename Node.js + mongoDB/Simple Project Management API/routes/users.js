import express from "express";
import validateUser from "../middleWare/userValidator.js";

import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

// Get all users
router.get("/all", getAllUsers);

// Create a new user
router.post("/", validateUser, createUser);

// Update an existing user by ID
router.patch("/:id", validateUser, updateUser);

// Delete a user by ID
router.delete("/:id", deleteUser);

export default router;
