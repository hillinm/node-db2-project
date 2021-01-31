
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('Make').notNullable();
      tbl.string('Model').notNullable();
      tbl.string('Mileage').notNullable();
      tbl.string('VIN').notNullable().unique();
      tbl.string('Transmission');
      tbl.boolean('Clean');
      tbl.boolean('Salvage');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
