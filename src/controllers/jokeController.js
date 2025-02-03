const sequelize = require('../config/database');
const Joke = require('../models/Joke');

// Ajouter une blague
exports.createJoke = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const joke = await Joke.create({ question, answer });
        res.status(201).json(joke);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer toutes les blagues
exports.getJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};

// Récupérer une blague par ID
exports.getJokeById = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);
    joke ? res.json(joke) : res.status(404).json({ error: "Joke not found" });
};

// Récupérer une blague aléatoire
exports.getRandomJoke = async (req, res) => {
    try {
        console.log("Tentative de récupération d'une blague aléatoire");

        // Requête pour récupérer une blague aléatoire
        const randomJoke = await Joke.findOne({
            order: sequelize.literal('RANDOM()')  // Fonction SQLite RANDOM() pour obtenir une ligne aléatoire
        });

        if (!randomJoke) {
            console.log("Aucune blague trouvée.");
            return res.status(404).json({ error: "No jokes found" });
        }

        console.log("Blague trouvée:", randomJoke);
        res.json(randomJoke);
    } catch (error) {
        console.error("Erreur lors de la récupération de la blague aléatoire:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


