const Quiz = require("../models/Quiz");
const QuizTrack = require("../models/QuizTrack");

// Route: Start a new quiz track
exports.startQuizTrack = async (req, res) => {
  const { userId, category, limit, title } = req.body;

  try {
    // Get random quizzes from the selected category
    const quizzes = await Quiz.aggregate([
      { $match: { category: category } },
      { $sample: { size: parseInt(limit) } }, // Random sampling of 'limit' number of quizzes
    ]);

    // Create a new quiz track
    const quizTrack = new QuizTrack({
      userId,
      title,
      quizzes: quizzes.map((quiz) => ({ quizId: quiz._id })),
    });

    await quizTrack.save();
    res.status(200).json(quizTrack);
  } catch (err) {
    res.status(500).json({ error: "Failed to start quiz track", details: err });
  }
};

// Route: Submit the quiz and calculate the score
exports.submitQuiz = async (req, res) => {
  const { quizTrackId, userAnswers } = req.body;

  try {
    // Fetch the quiz track by ID
    const quizTrack = await QuizTrack.findById(quizTrackId).populate(
      "quizzes.quizId"
    );

    // Calculate score
    let score = 0;
    quizTrack.quizzes.forEach((quiz, index) => {
      const correctAnswer = quiz.quizId.correctOption;
      const selectedAnswer = userAnswers[index].selectedOption;

      if (correctAnswer === selectedAnswer) {
        score++;
      }

      // Store the selected option in the quizTrack
      quiz.selectedOption = selectedAnswer;
    });

    // Save the score and updated quizTrack
    quizTrack.score = score;
    await quizTrack.save();

    res.status(200).json({ message: "Quiz submitted successfully", quizTrack });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit quiz", details: err });
  }
};
