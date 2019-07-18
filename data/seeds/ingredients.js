
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'almond milk'},
        {id: 2, name: 'brown rice'},
        {id: 3, name: 'sugar'}
      ]);
    });
};
