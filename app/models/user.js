//  déclarer une propriété pour chaque champ de la table correspondante.
//  coder un `constructor` qui prend en paramètre un objet.
// Cet objet contient toutes les valeurs à recopier dans l'instance.
//  ne pas oublier d'exporter la classe !
const client = require('../database');
const emailValidator = require('email-validator');
const CoreModel = require('./coremodel');

class User extends CoreModel {
    static table = 'user';
    email;
    password;
    firstname;
    lastname;

    /**
     *
     * @param {obj} obj obj  // est un objet
     */
    constructor(obj) {
        super(obj.id);
        if (typeof obj.email !== 'string') {
            throw new Error('User email must be a string');
        }
        if (!emailValidator.validate(obj.email)) {
            throw new Error('User email invalide');
        }
        this.email = obj.email;

        // A vous de définir ce que vous imposez comme format
        //  de mot de passe a l'utilisateur
        if (typeof obj.password !== 'string') {
            throw new Error('User password must be a string');
        }
        if (obj.password.length < 8) {
            throw new Error('User password must be min 8 chars length');
        }
        this.password = obj.password;

        if (typeof obj.firstname !== 'string') {
            throw new Error('User firstName must be a string');
        }
        this.firstname = obj.firstname;

        if (typeof obj.lastname !== 'string') {
            throw new Error('User lastName must be a string');
        }
        this.lastname = obj.lastname;
    }

    insert() {
        const query = {
            text: `INSERT INTO "user"
                ("email", "password", "firstname", "lastname")
                VALUES ($1, $2, $3, $4) RETURNING id`,
            values: [this.email, this.password, this.firstname, this.lastname],
        };

        client.query(query, (error, result) => {
            if (error) {
                console.error(error);
                return false;
            }

            if (!result.rowCount) {
                console.log("la requete n'a rien retourné", this);
                return false;
            }

            this.id = result.rows[0];

            console.log(this);
        });
    }

    // kudos Océane ! :)
    update() {
        const query = {
            text: `UPDATE "user" SET
                "firstname" = $1,
                "lastname" = $2,
                "email" = $3,
                "password" = $4
                WHERE id = $5 RETURNING id`,
            values: [
                this.firstname,
                this.lastname,
                this.email,
                this.password,
                this.id,
            ],
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
            text: `DELETE FROM "user" WHERE id = $1`,
            values: [this.id],
        };
        client.query(query, (err, result) => {
            if (err) {
                console.log(err);
                return err;
            }

            if (!result.rowCount) {
                return console.log('Delete did not target any rows', this);
            }

            console.log(this);
        });
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

module.exports = User;
