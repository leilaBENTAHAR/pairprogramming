const { Level, Tag, Quiz } = require('../models/index');

const mainController = {
    //
    async homePage(req, res) {
        try {

            const quizzes = await Quiz.findAll({
                include : { association: 'author'},
            });
    
   
             
}    catch (err) => {

                 console.error(err);
  }
    
    async homePage(req, res) {
        try {
            const data = await Level.findAll();

            //
            const tags = await Tag.findAll({
                include: [{ association: 'quizlist' }],
                attributes: {
                    exclude: ['created_at', 'updated_at'],
                },
            });

            // Récupérer les quiz avec leurs auteurs respectifs
            // il faut utiliser include
            // il faut exclure la champs date et id
             const quiz = await Quiz.findAll({
                 include: [{ association: 'author' }],
                 order: ['id'],
                 attributes: {
                    exclude: ['created_at', 'updated_at'],
                 },
             });

            const quizzes = await Quiz.findAll({
                include: [{ association: 'author' }],
                 attributes: {
                    exclude: ['created_at', 'updated_at', 'user_id'],
             },
         });

            const quizzes = await Quiz.findAll({
                include: [
                    { association: 'author' },
                    { association: 'questions' },
                ],
                attributes: {
                    exclude: ['id', 'created_at', 'updated_at'],
                },
                order: ['id'],
            });

            console.log(quizzes);

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
