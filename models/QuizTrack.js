const mongoose = require("mongoose");

const quizTrackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  quizzes: [
    {
      quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
      selectedOption: String,
    },
  ],
  score: Number,
});

module.exports = mongoose.model("QuizTrack", quizTrackSchema);
