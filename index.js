const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const quizRoutes = require("./routes/quiz");
const quizTrackRoutes = require("./routes/quizTrack");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/quiztrack", quizTrackRoutes);

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
);
