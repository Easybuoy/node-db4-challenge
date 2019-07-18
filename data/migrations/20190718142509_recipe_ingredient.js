exports.up = function(knex) {
  return knex.schema.createTable("recipe_ingredients", tbl => {
    tbl.increments();

    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("unit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("units")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("quantity")
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
