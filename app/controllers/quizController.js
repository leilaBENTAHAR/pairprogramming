const {Quiz} = require('../models/index'); 


const quizController= {


  async getQuiz(req, res) {

       try {

        const id = req.params.id;


    }catch (error) {

    console.error(error);

}


},

}



const quiz= await Quiz.findByPk(id,{
     
 include:[

     { association: 'author' },

     { association: 'tags' },
     
     { association: 'questions', include: ['level', 'answers'] },
],



   res.render('quiz',{quiz: quiz });

} catch (error) {

console.error('ERREUR :p', error.message);

}



module.exports = quizController;