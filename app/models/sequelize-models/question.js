const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./getConnexion')();

class Question extends Model {}

Question.init(
    {
        question: Sequelize.TEXT,
        anecdote: Sequelize.TEXT,
        wiki: Sequelize.TEXT,
        level_id: Sequelize.INTEGER,
        answer_id: DataTypes.INTEGER,
        quiz_id: Sequelize.NUMBER,
        // Ou
        // name: DataTypes.STRING,
    },
    // On dit au model comment se connecter a la BDD
    { sequelize: sequelize, tableName: 'question' }
);

module.exports = Question;
