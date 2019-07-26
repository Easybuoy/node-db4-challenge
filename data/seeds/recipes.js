
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Fruit Pizza'},
        {id: 2, name: 'Apple Spice Oatmeal'},
        {id: 3, name: 'Almond Rice Pudding'},
        {id: 4, name: 'Asian Citrus Chicken'},
      ]);
    });
};
