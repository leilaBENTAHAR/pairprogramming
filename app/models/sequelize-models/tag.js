const { Model, Sequelize, literal } = require('sequelize');
const sequelize = require('./getConnexion')();

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
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
        modelName: 'Tag',
        tableName: 'tag',
    }
);

module.exports = Tag;
