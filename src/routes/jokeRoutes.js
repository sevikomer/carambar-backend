const express = require('express');
const { getJokes, getJokeById, getRandomJoke, createJoke } = require('../controllers/jokeController');

const router = express.Router();

console.log("Définition des routes pour les blagues");

// Route pour récupérer une blague aléatoire
router.get('/random', getRandomJoke);

// Route pour récupérer toutes les blagues
router.get('/', getJokes);

// Route pour récupérer une blague par ID
router.get('/:id', getJokeById);

// Route pour créer une blague
router.post('/', createJoke);

module.exports = router;
