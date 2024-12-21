import axios from "axios";

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

async function searchCocktailByName(name) {
    const response = await axios.get(`${baseURL}/search.php?s=${name}`);
    return response.data;
}

async function searchCocktailByLetter(letter) {
    const response = await axios.get(`${baseURL}/search.php?f=${letter}`);
    return response.data;
}

async function searchIngredientByName(name) {
    const response = await axios.get(`${baseURL}/search.php?i=${name}`);
    return response.data;
}

async function randomCocktail() {
    const response = await axios.get(`${baseURL}/random.php`);
    return response.data;
}

export {
    searchCocktailByName,
    searchCocktailByLetter,
    searchIngredientByName,
    randomCocktail
};