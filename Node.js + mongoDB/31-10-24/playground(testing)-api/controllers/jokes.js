import Joke from "../models/jokes.js";

export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve jokes" });
  }
};

export const createJoke = async (req, res) => {
  try {
    const newJoke = new Joke(req.body);
    await newJoke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: "Failed to create joke" });
  }
};

export const updateJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJoke = await Joke.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedJoke) return res.status(404).json({ error: "Joke not found" });
    res.json(updatedJoke);
  } catch (error) {
    res.status(500).json({ error: "Failed to update joke" });
  }
};

export const deleteJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJoke = await Joke.findByIdAndDelete(id);
    if (!deletedJoke) return res.status(404).json({ error: "Joke not found" });
    res.json({ message: "Joke deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete joke" });
  }
};
