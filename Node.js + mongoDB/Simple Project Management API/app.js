import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import logRequest from "./middleWare/logger.js";
import projectsRoutes from "./routes/projects.js";
import taskRoutes from "./routes/tasks.js";
import userRoutes from "./routes/users.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

const URI = process.env.DB_URI;

app.use(express.json());

// connect to DB
mongoose.connect(URI).then(() => {
  console.log("Successfully Conected to MongoDb Server");
});

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

app.use("/projects", projectsRoutes);
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
