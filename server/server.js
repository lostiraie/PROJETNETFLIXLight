//Variable + dependance

//Express creer un serveur HTTP + gestion des routes
const express = require('express');

//app = serveur web --> represente le serveur Express
const app = express();

//app.get --> cree une route GET & / route racine
app.get('/', (req, res) => {
    res.json( 'Hello World!');
})


//Lancement du server sur le port 3000
app.listen(3000, () => {
    console.log(`Server lancé sur http://localhost:${3000}`)
});