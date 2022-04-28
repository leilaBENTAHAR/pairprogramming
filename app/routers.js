const express = require('express');
const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', mainController.homePage);
// Route paramétrée
router.get('/profile/:id', userController.profile);

router.get('/register', userController.index);
router.post('/register', userController.register);

module.exports = router;
