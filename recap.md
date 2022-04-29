# Créer un serveur avec nodejs.

---

1. Tapez `npm init` et répondre aux questions.
2. Créer un fichier `index.js` (le nom du fichier doit correspondre à la clé main dans `package.json`).
3. Installer les librairies dont vous avez besoin
4. Faire `index.js` pour configurer votre server.
5. On importe `express` et on crée une application avec `express()`.
6. Si on veut gérer le format JSON : il faut le spécifier ainsi : `app.use(express.json({limit: '10mb', extended: false}))`. Les options limit et extended sont là à titre d'exemple : Lisez la doc et modifiez-les selon vos besoins.
7. Créer un script npm start dans `package.json`.
8. On install nodemon : `npm install --save-dev nodemon` ou `npm i -D nodemon`.
9. On crée un script `dev` pour se servir de `nodemon`.
10. On installe la librairie `dotenv`.
11. On crée un fichier `.env` (CE FICHIER NE DOIT JAMAIS ETRE PARTAGE).
12. Crée un fichier `.gitignore` et mettre dedans ce que voue voulez ignorer.
13. Ensuite on peut faire `git init`.
14. Faire la structure des dossiers en MVC.

## Créer le repo

21. Créer un README.md bien précis et documenté.
22. Créer un repo git et l'envoyer sur github. (Choix URL : `git@github.com:<userName>/<repoName>.git`)
23. **_Penser à faire des petits commit et push très souvent pour identifier les bugs et problèmes plus rapidement et au cas ou un désastre se produit avec l'ordinateur, on ne perd pas beaucoup de travail_**.

## Installation de sequelize

4. `npm install sequelize`.
5. Créer la fonction de connection à la base de données.
6. Créer un model sans oublier de lui passer une référence de la connexion.
7. testé votre connexion avec ce model (en faisant une requete dans un controlleur)

### Exemple des étapes pour tester une connexion avec Sequelize :

1. Serveur

    - [x] On crée une route, une vue, un controller et un model qui vont travailler ensemble.
    - Le dossier `app` contiendra notre architecture MVC

        - ```javascript
            |-- app
                  |-- controllers
                  |-- models
                  |-- views
          ```

        ```

        ```

    - [x] Dans un controller, faites une requete sequelize et afficher les résultats sur la page créée pour ce test.
    - [x] Se resservir des fichiers de test pour un vrai truc
    -

## Installation de bcrypjs

25. `npm i bcryptjs`
26. Gérer les mots de passe avec les méthodes **salt, hash et compare**

### Faire la liste des requêtes a maitriser avec des exemples
