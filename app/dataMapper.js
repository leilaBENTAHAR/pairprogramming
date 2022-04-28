const client = require('./database');
const Level = require('./models/level');

const dataMapper = {
    // select * from level
    getAllLevels() {
        // On stocke notre requête dans une variable
        const query = 'SELECT * FROM level';

        // La méthode query : 1er argument : On dit au client d'exécuter la requête.
        // 2eme argument, une fonction callback qui accepte une erreur et les résultats
        client.query(query, (error, results) => {
            // Tout de suite on gère l'erreur éventuel
            // Si on a une erreur on la log et on quitte.
            if (error) {
                console.error(error);
                return;
            }

            // Si on obtien un résultat
            // On vérifie que les données sont présentes
            if (!results.rowCount) {
                // Si on a pas de données, on s'arrête
                console.log('no results');
                // return coupe l'exécution du code
                // On a pas besoin du else
                return;
            } else {
                let levels = [];
                for (let obj of results.rows) {
                    levels.push(new Level(obj));
                }

                // Ici on devrait return les data
                console.log(levels);
            }
        });
    },

    async getOneLevel(id) {
        //
        const query = {
            // $1 représente un placeholder, il est destiné a protéger notre requête
            // En utilsant cette technique, on empêche les injections SQL
            // Behind the scenes : postgres utilise des requêtes préparées.
            text: 'SELECT * FROM level WHERE id = $1',
            values: [id],
        };

        // await permet d'attendre le resultat avant de passer a la suite
        const results = await client.query(query);

        let level = {};
        if (results.rowCount) {
            level = new Level(results.rows[0]);
        }

        console.log(level);
    },
};

module.exports = dataMapper;
