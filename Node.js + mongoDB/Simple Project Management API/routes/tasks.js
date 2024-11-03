import express from "express";

import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.js";

const router = express.Router();

// Get all tasks
router.get("/all", getAllTasks);

// Create a new task
router.post("/", createTask);

// Update an existing task by ID
router.patch("/:id", updateTask);

// Delete a task by ID
router.delete("/:id", deleteTask);

export default router;
