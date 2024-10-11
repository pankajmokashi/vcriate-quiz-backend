const express = require("express");
const {
  startQuizTrack,
  submitQuiz,
} = require("../controllers/quizTrackController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/start", authMiddleware, startQuizTrack);
router.post("/submit", authMiddleware, submitQuiz);

module.exports = router;
