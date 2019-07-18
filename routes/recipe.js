const express = require("express");
const { getRecipes, getRecipesById } = require("../models/recipe");
const Router = express.Router();

Router.get("/", async (req, res) => {
  const recipes = await getRecipes();

  if (recipes.lenght === 0) {
    return res
      .status(404)
      .json({ status: "error", message: "Recipes not found" });
  }
  return res.json({
    status: "success",
    message: "Recipes gotten successfully",
    data: recipes
  });
});

Router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const recipes = await getRecipesById(id);

  if (!recipes) {
    return res
      .status(404)
      .json({ status: "error", message: "Recipe not found" });
  }

  return res.json({
    status: "success",
    message: "Recipe gotten successfully",
    data: recipes
  });
});

module.exports = Router;
