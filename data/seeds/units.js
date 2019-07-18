
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, name: 'cup'},
        {id: 2, name: 'teaspoon'},
        {id: 3, colName: 'tablespoons'},
      ]);
    });
};
