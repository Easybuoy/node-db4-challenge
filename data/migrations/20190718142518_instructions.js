exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();

    tbl
      .integer("instruction_number")
      .unsigned()
      .notNullable();

    tbl.text("instruction").notNullable();

    tbl
      .integer("quantity")
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
