const { Sequelize, Model, DataTypes } = require('sequelize');
// La fonction qu'on importe est exéctue en même temps gràce aux parenthèses
const sequelize = require('./getConnexion')();

class Level extends Model {}

Level.init(
    {
        name: Sequelize.STRING,
        // Ou
        // name: DataTypes.STRING,
    },
    // On dit au model comment se connecter a la BDD
    { sequelize: sequelize, tableName: 'level' }
);

module.exports = Level;
