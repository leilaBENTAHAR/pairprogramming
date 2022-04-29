const Level = require('./level');
const Question = require('./question');
const User = require('./user');
const Quiz = require('./quiz');
const Tag = require('./tag');
const Answer = require('./answer');

// Notre association
Question.belongsTo(Level, {
    foreignKey: 'level_id',
});
// Association réciproque
Level.hasMany(Question, {
    foreignKey: 'level_id',
});

module.exports = { Question, Level, User, Quiz, Answer, Tag };
