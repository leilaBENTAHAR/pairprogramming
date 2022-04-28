-   revoir la création d'utilisateur et de base de données et comprendre les erreur de password genre

Cette erreur peut provenir de plusieurs sources

1. Un fichier .env inexistant ou erroné
2.  2. Une BDD qui ne contient pas l'utilisateur voulu.

.On commence donc par faire la config de `.env` pour être safe
On fait `require('dotenv').config();` avznt de se connecter a la BDD

> Précision sur le constructeur et `super()`

    -   Dans un constucteur, c'est impératif d'appeler `super()` si on a besoin d'utiliser le mot clé `this`

> Un instance :
> C'est un objet issue d'une classe,
> On créé une instance avec le mot clé new et avec les informations nécessaires à la création de l'objet.

> `static` : le mot clé statique va permettre d'accéder a des méthodes et propriétés sans instancier une class. On se sert du nom de la class directement.

-   On peut avoir une table user dans une BDD, pour faire des requêtes dessus il faudra penser à entourer user avec des guillements : `select * from "user";`

-   Le mot clé `delete` sert à effacer une clé d'un objet

## Sequelize

** !! Attention !!**

> Pour pouvoir utiliser Sequelize, on doit avoir un driver corresondant à la BDD qu'on utlise. (pg pour postgres, mysql2 pour mysql, mariadb pour mariadb etc etc...))

Dans chaque Model.init de Sequelize, on devra passer une instance de la connexion a la BDD. Ce sera la clé sequelize dans l'objet de configuration.

Attention, il faut faire des fonctions pour gérer les erreurs.
