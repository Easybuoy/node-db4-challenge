const express = require("express");
const { getRecipes } = require("../models/recipe");
const Router = express.Router();

Router.get("/", async (req, res) => {
  const recipes = await getRecipes();

  res.json({
    status: "success",
    message: "Recipes gotten successfully",
    data: recipes
  });
});

module.exports = Router;
