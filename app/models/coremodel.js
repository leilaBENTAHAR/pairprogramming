const client = require('../database');
// Le _name pour l'exemple
class CoreModel {
    static table;
    #id;
    //_name;
    constructor(id /*name*/) {
        this.#id = id;
        // this._name = name;
    }

    get id() {
        return this.#id;
    }

    set id(val) {
        this.#id = val;
    }

    // get name() {
    //     return this._name;
    // }

    static findAll() {
        const query = `SELECT * FROM "${this.table}"`;

        client.query(query, (error, results) => {
            if (error) {
                console.error(error);
                return false;
            }

            if (!results.rowCount) {
                console.log('no results');

                return false;
            } else {
                let data = [];
                for (let obj of results.rows) {
                    data.push(new this(obj));
                }
                // Ici on devrait return les data
                console.log(data);
            }
        });
    }
    static async findById(id) {
        const query = {
            text: `SELECT * FROM "${this.table}" WHERE id = $1`,
            values: [id],
        };

        const results = await client.query(query);

        let data = {};
        if (results.rowCount) {
            data = new this(results.rows[0]);
            console.log(data);
        }
    }
}
// CoreModel.name;
module.exports = CoreModel;
