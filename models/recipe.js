const db = require("../data/dbConfig");

getRecipes = async () => {
  const recipes = await db("recipes");
  return recipes;
};

module.exports = {
  getRecipes
};
