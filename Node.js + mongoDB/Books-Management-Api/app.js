import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URI).then(() => {
  console.log("Successfully Conected to MongoDb Server");
});

// routes
// middleware


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });