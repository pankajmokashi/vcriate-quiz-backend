const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const quizRoutes = require("./routes/quiz");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
);
