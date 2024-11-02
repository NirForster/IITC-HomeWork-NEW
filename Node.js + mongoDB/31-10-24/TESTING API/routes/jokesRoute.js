import express from "express";
import validateJoke from "../middleware/validator.js";

import {
  getAllJokes,
  getJokeByID,
  getRandomJoke,
  addNewJoke,
  partialJokeUpdate,
  fullJokeUpdate,
  deleteJoke,
} from "../controllers/jokesController.js";

const router = express.Router();

// Get All Jokes
router.get("/all", getAllJokes);

// Get a random Joke
router.get("/random", getRandomJoke);

// Get a Joke by ID
router.get("/:id", getJokeByID);

// Add a new Joke
router.post("/", validateJoke, addNewJoke);

// Update a Joke
router.patch("/:id", partialJokeUpdate);

// Update Full Joke
router.put("/:id", validateJoke, fullJokeUpdate);

// Delete Joke
router.delete("/:id", deleteJoke);

export default router;
