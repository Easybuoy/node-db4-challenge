exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { id: 1, recipe_id: 1, ingredient_id: 1, unit_id: 1, quantity: 20 },
        { id: 2, recipe_id: 4, ingredient_id: 1, unit_id: 2, quantity: 40 },
        { id: 3, recipe_id: 3, ingredient_id: 2, unit_id: 3, quantity: 28 }
      ]);
    });
};
