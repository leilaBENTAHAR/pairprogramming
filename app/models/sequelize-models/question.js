const { Sequelize, Model, DataTypes, literal } = require('sequelize');
const sequelize = require('./getConnexion')();

class Question extends Model {}

Question.init(
    {
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        question: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        anecdote: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        wiki: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        level_id: {
            type: Sequelize.INTEGER,
        },
        answer_id: {
            type: Sequelize.INTEGER,
        },
        quiz_id: {
            type: Sequelize.INTEGER,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    // On dit au model comment se connecter a la BDD
    {
        sequelize: sequelize,
        tableName: 'question',
        modelName: 'Question',
    }
);

module.exports = Question;
