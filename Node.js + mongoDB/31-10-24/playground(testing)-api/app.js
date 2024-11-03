import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

// Routes Import
import jokesRoutes from "./routes/jokes.js";
import usersRoutes from "./routes/users.js";
import productsRoutes from "./routes/products.js";

dotenv.config();
const app = express();
app.use(express.json());

console.log("Hello", process.env.USER);

// DB Connection
const URI = process.env.DB_URI;
console.log(URI);

mongoose.connect(URI).then(() => {
  console.log("Successfully Conected to MongoDb Server");
});

// Middleware
app.use(morgan("tiny"));

app.use("/jokes", jokesRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
