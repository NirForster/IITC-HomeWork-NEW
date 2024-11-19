import express from "express";
import validateUser from "../middleware/validator.js";
import {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUserByName,
} from "../controllers/testController.js";

const router = express.Router();

router.get("/name/:name", getUserByName);

router.get("/all", getAllUsers);

router.post("/add", validateUser, createNewUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
