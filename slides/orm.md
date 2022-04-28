# ORM

Object Relationnal Mapping

---

## Contexte

>"Je veux un Quizz, avec son auteur, ses questions, et que chaque question soit associée à son 'answer'."

Avec notre CoreModel à la main, on a 2 solutions : 
- soit faire une cascade de requêtes, et c'est gentiment horrible (et vraiment pas du tout optimisé)
- soit implémenter un méga JOIN, et ça aussi c'est bien horrible...

On laisse tomber ! On va utiliser un ORM !

---

## C'est quoi

>Un type de programme informatique qui se place en interface entre un programme applicatif et une base de données...

C'est CoreModel (ou dataMapper, selon l'ORM), mais en mieux !

---

## A quoi ça sert

<ul>
<li class="fragment">Mettre rapidement en place les Models</li>
<li class="fragment">Voire créer les tables correspondante ("Synchronisation")</li>
<li class="fragment">Pouvoir changer de BDD (tant qu'on reste en SQL!) sans s'embêter avec les différences</li>
<li class="fragment">Gérer les types et les contraintes ("Validation")</li>
<li class="fragment">Mettre à jour et modifier la BDD de façon cadrée et réversible ("Migrations")</li>
<li class="fragment">Se connecter à plusieurs serveurs de BDD en même temps ("Replication")</li>
<li class="fragment">Mais surtout... (ce suspens !)</li>
<li class="fragment">Gérer les relations entre les modèles ("Relation" ou "Association")</li>

</ul>

---

## C'est parti !

On va utiliser Sequelize.
