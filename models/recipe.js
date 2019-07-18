const db = require("../data/dbConfig");

getRecipes = async () => {
  const recipes = await db("recipes");
  return recipes;
};

getRecipesById = async id => {
  const recipe = await db("recipes").where({ id })[0];
  return recipe;
};

module.exports = {
  getRecipes,
  getRecipesById
};
