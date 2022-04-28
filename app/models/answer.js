const CoreModel = require('./coremodel');

class Answer extends CoreModel {
    static table = 'answer';
    description;
    question_id;
    /**
     *
     * @param {obj} obj
     */
    constructor(obj) {
        super(obj.id);
        this.description = obj.description;
        this.question_id = obj.question_id;
    }
}

module.exports = Answer;
