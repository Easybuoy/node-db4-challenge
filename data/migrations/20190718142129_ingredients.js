exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();

    tbl.text("name").notNullable();

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
  return knex.schema.dropTableIfExists("ingredients");
};
