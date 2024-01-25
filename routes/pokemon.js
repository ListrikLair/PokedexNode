var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/', function (req, res, next) {
    var jsonFilePath = "./public/jsons/pokemon.json";

    fs.readFile(jsonFilePath, "utf8", function (err, data) {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).send('Error reading JSON file');
        }

        var pokemonList = JSON.parse(data);

        res.render('pokemon', { pokemon: pokemonList, title: "Pokemon" });
    });
});

module.exports = router;
