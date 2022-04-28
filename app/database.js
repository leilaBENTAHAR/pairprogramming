// On passe l'URL en dur dans le constructeur de Client, car comme on teste
// dans un fichier test.js, la ligne de code dotenv.config() n'est pas lu.
// Donc on a pas accès aux variables d'environnement.

// const pg = require('pg');
// const client = new pg.Client('postgres://oquiz:password@localhost/oquiz');

// Je destruture pg pour avoir accès a la Class Client
const { Client } = require('pg');
const client = new Client('postgres://oquiz:password@localhost/oquiz');

// On dit a pg de se connecter
client.connect();

module.exports = client;
