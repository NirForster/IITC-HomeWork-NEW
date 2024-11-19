import UserModel from "../models/testModel.js";

export function welcome() {
  console.log("welcome to our API");
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error); // Log error for debugging
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const newUser = await new UserModel({ name, email, age }).save();

    res.status(201).json({
      message: "New user added",
      user: newUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ error: "Joke not found" });
    return res.json({ message: "Joke deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete user" });
  }
};

export const getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const userByName = await UserModel.findOne({ name });
    if (!userByName) return res.status(404).json({ error: "User not found" });
    return res.json(userByName);
  } catch (error) {
    return res.status(500).json({ error: "Failed to find user" });
  }
};
