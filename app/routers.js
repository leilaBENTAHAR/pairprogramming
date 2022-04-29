const express = require('express');
const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
const questionController = require('./controllers/questionController');
const levelController = require('./controllers/levelController');

const router = express.Router();

router.get('/', mainController.homePage);
// Route paramétrée
router.get('/profile/:id', userController.profile);

/// Créer un level
router.post('/create/level', levelController.store);

router.get('/questions', questionController.index);

router.get('/register', userController.index);
router.post('/register', userController.register);

module.exports = router;
