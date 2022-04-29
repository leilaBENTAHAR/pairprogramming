const Question = require('../models/sequelize-models/question');
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
};

module.exports = questionController;
