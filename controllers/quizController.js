const Quiz = require("../models/Quiz");

// Get all quizzes
exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

// Get quiz by ID
exports.getQuizById = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
};
