import Project from "../models/project.js";

// Retrieve all Projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve projects" });
  }
};

// Create a new project
export const createProject = async (req, res) => {
  try {
    const { name, description, status } = req.body;

    const newProject = new Project({
      name,
      description,
      status,
    });

    await newProject.save();
    res
      .status(201)
      .json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ error: "Failed to create project" });
  }
};

// Update an existing project by ID (partial update)
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    const updatedProject = await Project.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    if (!updatedProject) {
      return res
        .status(404)
        .json({ message: `No project found with id: ${id}` });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update project" });
  }
};

// Delete a project by ID
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res
        .status(404)
        .json({ message: `No project found with id: ${id}` });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete project" });
  }
};
