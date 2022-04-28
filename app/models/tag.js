const CoreModel = require('./coremodel');

class Tag extends CoreModel {
    name;
    /**
     *
     * @param {dataObject} dataObject
     */
    constructor(dataObject) {
        super(dataObject.id);

        if (typeof dataObject.name !== 'string') {
            throw new Error('Tag name must be a string');
        }
        this.name = dataObject.name;
    }
}

module.exports = Tag;
