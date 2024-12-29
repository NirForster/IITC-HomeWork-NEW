const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/businesses", require("./routes/businessRoutes"));
app.use("/users", require("./routes/userRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});
