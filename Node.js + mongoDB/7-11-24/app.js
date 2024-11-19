import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import testRouter from "./routes/testRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URI).then(() => {
  console.log("mongoDB server connected Successfully");
});

app.use(morgan("tiny"));

app.use("/test", testRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` hello world || Server is running on port ${PORT}`);
});
