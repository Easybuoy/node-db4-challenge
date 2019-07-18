
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, instruction_id: 1, recipe_id: 4, instruction: 'Heat oil in a large skillet over medium-high heat (350 degrees in an electric skillet'},
        {id: 2, instruction_id: 2, recipe_id: 4, instruction: 'Add chicken, ginger and garlic, and cook 5 minutes or until chicken is no longer pink'},
        {id: 3, instruction_id: 3, recipe_id: 4, instruction: 'Add pineapple juice, chicken broth and vinegar. Cover and simmer for 5 minutes.'},
        {id: 4, instruction_id: 4, recipe_id: 1, instruction: 'Add sliced vegetables. Cover and cook 3 minutes.'},
      ]);
    });
};
