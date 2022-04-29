const { Model, Sequelize, literal } = require('sequelize');
const sequelize = require('./getConnexion')();

class Answer extends Model {}

Answer.init(
    {
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        question_id: {
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
    {
        sequelize: sequelize,
        modelName: 'Answer',
        tableName: 'answer',
    }
);

module.exports = Answer;
