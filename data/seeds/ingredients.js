
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'almond milk', recipe_id: 4},
        {id: 2, name: 'brown rice', recipe_id: 2},
        {id: 3, name: 'sugar', recipe_id: 3},
        {id: 4, name: 'rice', recipe_id: 4},

      ]);
    });
};
