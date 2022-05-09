const express = require('express');

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
const questionController = require('./controllers/questionController');
const levelController = require('./controllers/levelController');
const levelController = require('./controllers/quizController');

const router = express.Router();

router.get('/', mainController.homePage);

router.post('/create/level', levelController.store);

router.get('/questions', questionController.index);
router.get('/question/with/level', questionController.questionWitLevel);
router.get ('/quiz/:id', quizController.getQuiz);


router.get('/profile/:id', userController.profile);
router.get('/register', userController.index);
router.post('/register', userController.register);

module.exports = router;
