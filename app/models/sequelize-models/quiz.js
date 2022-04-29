const { Model, Sequelize, literal } = require('sequelize');
const sequelize = require('./getConnexion')();

class Quiz extends Model {}

Quiz.init(
    {
        //
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            // Possibilité  de faire une assoc ici
            // references: {
            //     model: User,
            // },
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
        modelName: 'Quiz',
        tableName: 'quiz',
    }
);

module.exports = Quiz;
