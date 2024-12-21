import express from "express";
import {
    searchCocktailByLetter,
    searchIngredientByName,
    searchCocktailByName,
    randomCocktail
} from "../db/cocktail.js";

const router = express.Router();

router.get("/search/name/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const cocktailData = await searchCocktailByName(name);
        res.send(cocktailData);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching cocktail by name' });
    }
});

router.get("/search/letter/:letter", async (req, res) => {
    try {
        const { letter } = req.params;
        const cocktailData = await searchCocktailByLetter(letter);
        res.send(cocktailData);
    } catch (error) {
        res.status(500).send({ error: "Error fetching cocktail by Letter" });
    }
})

router.get("/search/ingredient/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const cocktailData = await searchIngredientByName(name);
        res.send(cocktailData);
    } catch (error) {
        res.status(500).send({ error: "Error fetching Ingredients by name" });
    }
})

router.get("/random-cocktail", async (req, res) => {
    try {
        const cocktailData = await randomCocktail();
        res.send(cocktailData);
    } catch (error) {
        res.status(500).send({ error: "Error fetching random cocktail" });
    }
})

export default router;