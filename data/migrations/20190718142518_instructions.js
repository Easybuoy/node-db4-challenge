exports.up = function(knex) {
  return knex.schema.createTable("instructions", tbl => {
    tbl.increments();

    tbl
      .integer("instruction_id")
      .unsigned()
      .notNullable();

    tbl.text("instruction").notNullable();

    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};
