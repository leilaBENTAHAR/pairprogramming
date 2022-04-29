const Level = require('./level');
const Question = require('./question');
const User = require('./user');
const Quiz = require('./quiz');
const Tag = require('./tag');
const Answer = require('./answer');

// Essaye si possible de reduire a categorie et produit
// une categorie contient plusieurs produits
// un produit appartient a une categorie

// Notre association Question et Level
Question.belongsTo(Level, {
    foreignKey: 'level_id',
});
// Association réciproque
Level.hasMany(Question, {
    foreignKey: 'level_id',
});
// hasMany, belongsTo, belongsToMany, hasOne

// Question et Quiz
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    as: 'questions',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    as: 'questions',
});

// Question et Answer
Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'answers',
});
Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question',
});
// L'association du jour !
Question.belongsTo(Answer, {
    foreignKey: 'answer_id',
    as: 'good_answer',
});

// Quiz et User
Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author',
});

User.hasMany(Quiz, {
    foreignKey: 'user_id',
    as: 'quiz_list',
});

// Quiz et Tag
Tag.belongsToMany(Quiz, {
    as: 'quizlist',
    through: 'quiz_has_tag', // va chercher les assocs sur cette table
    foreignKey: 'quiz_id', //
    otherKey: 'tag_id', // A spécifier pour pouvoir faire la liaison entre plusireurs resources
});

Quiz.belongsToMany(Tag, {
    as: 'tags',
    through: 'quiz_has_tag',
    foreignKey: 'quiz_id',
    otherKey: 'tag_id',
});

module.exports = { Question, Level, User, Quiz, Answer, Tag };

// Voila a quoi sert le as : faire un alias
// for (quiz of quizzes) {

//     for (question of quiz.){
//         questions : [tableaux dez questions associées au quiz]
//     }
// }
