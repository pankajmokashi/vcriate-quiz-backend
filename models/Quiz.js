const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  category: String,
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: String, required: true },
});

module.exports = mongoose.model("Quiz", quizSchema);
