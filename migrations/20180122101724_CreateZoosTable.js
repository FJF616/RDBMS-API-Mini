
exports.up = function(knex, Promise) {
  //this code executes when we run the migration
  //create the zoos table
  return knex.schema.createTable('zoos', function(tbl) {
      tbl.increments('id'); // by default it will be called id
      
      tbl
      .string('name', 255)
      .notNullable()
      .unique('name', 'uq_zoos_name');
      
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  //this code runs when rolling back the migration
  //delete the zoos table
  return knex.schema.dropTableIfExists('zoos');
};
