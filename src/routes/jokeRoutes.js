const express = require('express');
const { getJokes, getJokeById, getRandomJoke, createJoke } = require('../controllers/jokeController');
const router = express.Router();

console.log("Définition des routes pour les blagues");

/**
 * @swagger
 * /api/blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 */
router.get('/random', getRandomJoke);

/**
 * @swagger
 * /api/blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     responses:
 *       200:
 *         description: Une liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 */
router.get('/', getJokes);

/**
 * @swagger
 * /api/blagues/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la blague
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: La blague correspondante
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', getJokeById);

/**
 * @swagger
 * /api/blagues:
 *   post:
 *     summary: Crée une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: La blague a été créée
 *       400:
 *         description: Données invalides
 */
router.post('/', createJoke);

module.exports = router;
