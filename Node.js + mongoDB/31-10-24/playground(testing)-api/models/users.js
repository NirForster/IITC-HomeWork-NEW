import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
});

export default mongoose.model("User", userSchema);
