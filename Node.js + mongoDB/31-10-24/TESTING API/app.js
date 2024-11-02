// import fs from "fs/promises";
// import authUser from './middleware/auth.js'
import express from "express";
import morgan from "morgan";
import logRequest from "./middleware/logger.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes Import
import router from "./routes/jokesRoute.js";

const app = express();
const PORT = 3000;
dotenv.config();

console.log("Hello", process.env.USER);

// DB Connection
const URI = process.env.DB_URI;
console.log(URI);

mongoose.connect(URI).then(() => {
  console.log("Successfully Conected to MongoDb Server");
});

// Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

app.use("/api/jokes", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
