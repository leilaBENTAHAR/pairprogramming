const CoreModel = require('./coremodel');

class Question extends CoreModel {
    question;
    anecdote;
    wiki;
    level_id;
    answer_id;
    quiz_id;

    /**
     *
     * @param {obj} obj
     */
    constructor(obj) {
        super(obj.id);
        this.question = obj.question;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }
}

module.exports = Question;
