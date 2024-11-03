import User from "../models/user.js";

// Retrieve all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const newUser = new User({
      name,
      email,
      role,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Update an existing user by ID (partial update)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: `No user found with id: ${id}` });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: `No user found with id: ${id}` });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
