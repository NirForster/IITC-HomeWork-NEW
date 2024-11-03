import Task from "../models/task.js";

// Retrieve all Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
};

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate, projectId } = req.body;

    const newTask = new Task({
      title,
      description,
      status,
      dueDate,
      projectId,
    });

    await newTask.save();
    res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

// Update an existing task by ID (partial update)
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: `No task found with id: ${id}` });
    }

    res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: `No task found with id: ${id}` });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
