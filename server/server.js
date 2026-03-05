//Express creer un serveur HTTP + gestion des routes
const express = require("express");

//Path sert a utiliser les chemins de fichiers et dossiers relier front (HTML,CSS,JS) avec back
const path = require("path");

//serveur --> represente le serveur Express
const serveur = express();

//Express.static sert tous les fichiers qui se trouve dans le dossier WEB
serveur.use(express.static(path.resolve(__dirname, '../web')));

//serveur.get --> cree une route GET and "/" route racine
serveur.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../web/html/index.html"));
});

//Lancement du server sur le port 3000
const openBrowser = async (url) => {
    const { default: open } = await import('open');
    open(url);
};

serveur.listen(3000, () => {
    console.log(`Server lancé sur http://localhost:${3000}`);

// ouvrir le navigateur avec import dynamique donc dependance "npm install open"
    openBrowser(`http://localhost:${3000}`)
});

