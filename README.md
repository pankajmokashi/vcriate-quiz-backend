# Project Overview
This is a basic online quiz application built using Node.js, Express.js, and MongoDB. The application provides RESTful APIs for user authentication, managing quizzes, tracking quiz sessions, and viewing results.

### Links
- Repo Link: https://github.com/pankajmokashi/vcriate-quiz-backend.git
- Base Link: https://quiz-ebon-nine.vercel.app/
- Postman Doc: https://documenter.getpostman.com/view/27254096/2sAXxS8XE1

### API Endpoints Documentation
1. User Authentication
 - POST /api/auth/signup: Register a new user.
 - POST /api/auth/login: Log in an existing user.

2. Quiz Management
 - GET /api/quizzes: Get all available quizzes.
 - GET /api/quizzes/:id: Get quiz details by ID.

3. Quiz Track (Taking a Quiz)
 - POST /api/quiztrack/start: Start a new quiz track.
 - POST /api/quiztrack/submit: Submit quiz answers and calculate the score.

### Installation
1. Clone the repository:
```
git clone https://github.com/pankajmokashi/vcriate-quiz-backend.git
cd vcriate-quiz-backend
```

2. Install dependencies: Inside the project directory, run:
```
npm install
```

3. Set up .csv file:
- Create a .env file at the root of your project and add your MongoDB connection string there.
```.env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

4. Running the Application
```
npm start
```
This will start the server on http://localhost:5000.
