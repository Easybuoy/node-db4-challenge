const db = require("../data/dbConfig");

getRecipes = async () => {
  const recipes = await db("recipes");
  return recipes;
};

getRecipesById = async id => {
  const recipe = await db("recipes").where({ id })[0];
  return recipe;
};

getShoppingList = async recipe_id => { console.log(recipe_id)
  return await db("recipe_ingredients")
  .join("recipes", "recipe_ingredients.recipe_id", "recipes.id" )
    .where({ "recipe_ingredients.recipe_id": recipe_id });
};

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList
};
