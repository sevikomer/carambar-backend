// Import des modules
const express = require("express");
const sequelize = require("./src/config/database");
const jokeRoutes = require("./src/routes/jokeRoutes");
const setupSwagger = require("./src/swagger/swaggerConfig");
const bodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config();

// Création de l'application Express
const app = express();

// Middleware CORS
app.use(cors());

// Middleware pour les headers CORS personnalisés
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware pour analyser le corps de la requête
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route de base
app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API Carambar & Co !");
});

// Routes pour les blagues
app.use("/api/blagues", jokeRoutes);

// Synchronisation avec la base de données
sequelize.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Error synchronizing database:", error);
    });

// Configuration Swagger
setupSwagger(app);

// Export de l'application
module.exports = app;
