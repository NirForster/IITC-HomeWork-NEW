import express from "express";

import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.js";

const router = express.Router();

// Get all projects
router.get("/all", getAllProjects);

// Create a new project
router.post("/", createProject);

// Update an existing project by ID
router.patch("/:id", updateProject);

// Delete a project by ID
router.delete("/:id", deleteProject);

export default router;
