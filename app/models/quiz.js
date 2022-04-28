const CoreModel = require('./coremodel');

class Quiz extends CoreModel {
    title;
    description;
    user_id;

    /**
     *
     * @param {obj} obj
     */
    constructor(obj) {
        super(obj.id);
        this.title = obj.title;
        this.description = obj.description;

        // NaN : Not a Number
        if (typeof obj.level_id !== 'number') {
            throw new Error('level_id must be a number!');
        }

        if (!parseInt(user_id)) {
            throw new Error('User ID must be an int');
        }
        this.user_id = obj.user_id;
    }
}

module.exports = Quiz;
