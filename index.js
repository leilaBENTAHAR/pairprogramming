// !! Comencer par .env et dotenv pour être safe
// Mettre cette ligne avant de se connecter a la BDD
require('dotenv').config();

const path = require('path');
const express = require('express');
const router = require('./app/routers');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './assets')));

// Si on pas cette lgne, on a pas req.body
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
