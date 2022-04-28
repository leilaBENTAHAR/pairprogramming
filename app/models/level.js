const CoreModel = require('./coremodel');
const client = require('../database');

class Level extends CoreModel {
    static table = 'level';
    name;
    /**
     *
     * @param {obj} obj
     */
    constructor(obj) {
        super(obj.id);

        this.name = obj.name;
    }

    insert() {
        const query = {
            text: `INSERT INTO "level" ("name") VALUES ($1) RETURNING id`,
            values: [this.name],
        };

        client.query(query, (error, result) => {
            if (error) {
                console.error(error);
                return;
            }

            if (!result.rowCount) {
                console.log("la requete n'a rien retourné", this);
            }

            this.id = result.rows[0];

            console.log(this);
        });
    }

    update() {
        const query = {
            text: `UPDATE "level" SET "name" = $1 WHERE id = $2 RETURNING id`,
            values: [this.name, this.id],
        };
        client.query(query, (err, result) => {
            if (err) {
                return err;
            }

            if (!result.rowCount) {
                return console.log('Update did not target any rows', this);
            }

            // au moins une ligne a été modifié => tout va bien !
            return console.log(this);
        });
    }

    destroy() {
        const query = {
            text: `DELETE FROM "level" WHERE id = $1`,
            values: [this.id],
        };
        client.query(query, (err, result) => {
            if (err) {
                return callback(err, null);
            }

            if (!result.rowCount) {
                return callback('Delete did not target any rows', this);
            }

            console.log(this);
        });
    }
}

module.exports = Level;
