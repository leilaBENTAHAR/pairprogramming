const dataMapper = require('./app/dataMapper');
const Level = require('./app/models/level');
const User = require('./app/models/user');
const Answer = require('./app/models/answer');
// try {
//     dataMapper.getAllLevels();
//     dataMapper.getOneLevel(1);
// } catch (error) {
//     console.error(error);
// }

// 1er essai sans méthode statique, c'est un problème car on doit mettre unargument constructeur aui ne sert à rien
// const level = new Level({ id: 1, name: 'Ultra Hard' });
// level.insert();

// const levelToUpdate = new Level({ id: 6, name: 'Hélène' });
// levelToUpdate.update();

// level.findAll();

// méthode static : n'instancie pas la classe
// Level.findAll();
//
// Level.findById(1);

// Level.findById(5);

// const level = new Level({ id: 5 });
// level.destroy();

// User.findAll();
// try {
//     User.findById(1);
// } catch (error) {
//     console.error(error);
// }

const userObj = {
    id: 4,
    email: 'laurent@oclock.io',
    password: 'password',
    firstname: 'Oceane',
    lastname: 'Oclock',
};

const user = new User(userObj);
const level = new Level({ id: 6, name: 'Hélène' });

// User.findAll();
// Level.findAll();
// Answer.findAll();

User.findById(1);
Level.findById(1);
Answer.findById(1);

// user.findAll();
// level.findAll();

// const userTotoDelete = new User(userObj);
// userTotoDelete.destroy();

// test de delete
// console.log(userObj);
//Le mot clé `delete` sert à effacer une clé d'un objet
// delete userObj.email;
// console.log(userObj);

// const newUser = new User(userObj);
// newUser.update();
