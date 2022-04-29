const { Model, Sequelize, literal } = require('sequelize');
const sequelize = require('./getConnexion')();

class QuizHasTag extends Model {}

QuizHasTag.init(
    {
        id: Sequelize.INTEGER,
        quiz_id: Sequelize.INTEGER,
        tag_id: Sequelize.INTEGER,
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
        tableName: 'quiz_has_tag',
    }
);

module.exports = QuizHasTag;
