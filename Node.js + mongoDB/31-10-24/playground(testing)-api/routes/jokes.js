import express from "express";
import {
  getAllJokes,
  createJoke,
  updateJoke,
  deleteJoke,
} from "../controllers/jokes.js";

const router = express.Router();

router.get("/", getAllJokes);
router.post("/", createJoke);
router.patch("/:id", updateJoke);
router.delete("/:id", deleteJoke);

export default router;
