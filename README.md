# carambar-backend

Description
Carambar & Co est une API qui permet de gérer des blagues. Elle permet d'ajouter des blagues, de récupérer une blague par ID ou aléatoirement. Le frontend est une interface simple permettant de consulter ces blagues et d'afficher une blague aléatoire.

Prérequis
Node.js et npm installés sur ta machine
SQLite pour la base de données

Installation
Clone le repository sur ta machine :
git clone https://github.com/ton-nom-de-repository.git

Va dans le répertoire du projet backend :
cd backend

Installe les dépendances :
npm install

Crée un fichier .env à la racine du projet (s'il n'existe pas) et ajoute les variables suivantes :
env
PORT=3000
DB_PATH=./database.sqlite  # ou le chemin de ta base de données SQLite

Démarre le serveur :
npm start
L'API sera disponible à l'adresse http://localhost:3000

Endpoints de l'API
GET /api/blagues/random : Récupère une blague aléatoire.
GET /api/blagues : Récupère toutes les blagues.
GET /api/blagues/{id} : Récupère une blague par son ID.
POST /api/blagues : Crée une nouvelle blague.

Documentation Swagger
Tu peux consulter la documentation Swagger de l'API à l'adresse suivante : http://localhost:3000/api-docs.

Technologies utilisées
Node.js
Express
Sequelize (ORM pour SQLite)
SQLite (base de données)
Swagger (documentation API)

Contributions
Les contributions sont les bienvenues ! Si tu souhaites contribuer, n'hésite pas à ouvrir une pull request ou à signaler des bugs.

Auteur
Omer SEVIK
