const Level = require('../models/sequelize-models/level');

const mainController = {
    //
    // homePage(req, res) {
    //     // select * from nomDuModel
    //     Level.findAll()
    //         .then((data) => {
    //             res.render('home', { levels: data });
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         })
    //         .finally(() => {
    //             console.log('requête terminée');
    //         });
    // },
    async homePage(req, res) {
        try {
            const data = await Level.findAll();

            res.render('home', { levels: data });
        } catch (error) {
            // Il faut avoir une fonction qui gère les erreurs
            console.error(error);
        } finally {
            console.log('requête async / await terminée');
        }
    },
};

module.exports = mainController;
