const { Question, Level } = require('../models/index');

const questionController = {
    async index(req, res) {
        //
        try {
            const questions = await Question.findAll();

            // Trouver la question dont l'id est de 3
            // const question = await Question.findByPk(3);

            // const question = await Question.findAll({
            //     where: { id: 3 },
            // });

            // Expérimenter
            // const question = await Question.findAndCountAll({
            //     where: { id: 3 },
            // });

            const question = await Question.findOne({
                where: { id: 3 },
            });

            console.log(question);
            res.render('questions', { questions });
        } catch (error) {
            console.error(error);
        }
    },

    async questionWitLevel(req, res) {
        //Récupérer une Question avec son Level associé :
        // https://sequelize.org/docs/v6/core-concepts/assocs/
        // eager loading

        const question = await Question.findOne({
            where: { id: 3 },
            include: Level,
        });

        console.log(question);

        res.end();
    },
};

module.exports = questionController;
