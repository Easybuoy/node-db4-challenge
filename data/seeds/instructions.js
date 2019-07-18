
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instruction').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruction').insert([
        {id: 1, instruction_id: 1, instruction: 'Boil Water'},
        {id: 2, instruction_id: 1, instruction: 'Boil Water'},
        {id: 3, instruction_id: 1, instruction: 'Boil Water'},
      ]);
    });
};
