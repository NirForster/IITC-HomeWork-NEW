import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
  dueDate: {
    type: Date,
    required: false,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

export default mongoose.model("Task", taskSchema);
