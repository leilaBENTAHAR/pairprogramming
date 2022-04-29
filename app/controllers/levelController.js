const { Level } = require('../models/sequelize-models');

const levelController = {
    async store(req, res) {
        const { name } = req.body;
        try {
            const level = await Level.create({ name: name });

            console.log(level);
        } catch (error) {
            console.error(error);
        }

        res.redirect('/');
    },
};

module.exports = levelController;
