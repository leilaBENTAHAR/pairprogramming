const bcrypt = require('bcrypt');
const { User } = require('../models/sequelize-models');

const userController = {
    index(req, res) {
        res.render('register');
    },

    async profile(req, res) {
        try {
            const { id } = req.params;
            // Aller chercher un utilisateur
            // Trouver la méthode Sequelize qui permet de récupérer une resource par son ID
            // ID : Primary Key : PK
            const user = await User.findByPk(id);

            res.render('profile', { user: user });
        } catch (error) {
            console.error(error);
        }
    },

    async register(req, res) {
        //
        // const email = req.body.email;
        // const password = req.body.password;
        // On destructure c'est mieux :)
        const { email, password, firstname, lastname } = req.body;

        try {
            const user = new User({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
            });

            // Chiffre le mot de passe
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            user.password = hash;
            // diverses chose

            // .save() retourne qqchose que vous devrez console.log juste pour vérifier
            // Quand j'ai fini :
            await user.save();

            // await User.create({
            //     email: email,
            //     password: password,
            //     firstname: firstname,
            //     lastname: lastname,
            // });
        } catch (error) {
            // récupérer les erreurs de validation et renvoyez
            // ces erreur comme infomation à l'utilisateur
            // sur la page register
            console.error(error);
        }

        res.render('register');
    },
};

module.exports = userController;
