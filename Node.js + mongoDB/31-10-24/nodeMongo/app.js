import express from "express";
import mongoose from "mongoose";
import joke from "./models/jokeModel.js";

const uri =
  "mongodb+srv://nirforster:BIESBJASUADgZuOO@cluster0.8kzky.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri).then(() => {
  console.log("Connected");
});

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.post("/api/jokes", async (req, res) => {
  const newJoke = new joke({
    joke: req.body.joke,
    content: req.body.content,
  });

  await newJoke.save();

  res.send({
    msg: "Good Job!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
