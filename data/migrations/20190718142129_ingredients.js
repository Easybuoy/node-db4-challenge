exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();

    tbl.text("name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
