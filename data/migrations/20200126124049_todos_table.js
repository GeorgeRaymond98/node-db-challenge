exports.up = function(knex) {
    return knex.schema
      .createTable('todos', tbl => {
        tbl.increments('id');

        tbl
          .string('todoName', 255)
          .notNullable();

        tbl
        .string('todoDescription', 255);

        tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
      })
    //   ------------------------------------------
      .createTable('resources', tbl => {
        tbl
        .increments('id');

        tbl
          .string('resourceName', 255)
          .unique()
          .notNullable();

        tbl
        .string('resourceDescription', 255);
      })
       //   ------------------------------------------

      .createTable('todos_resources', tbl => {
        tbl.increments('id');

        tbl.integer('todoKey')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('todos')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

        tbl.integer('resourceKey')
        .unsigned()
        .notNullable()
        .references('id').inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      })
       //   ------------------------------------------

      .createTable('tasks', tbl => {
        tbl.increments('id');

        tbl
          .integer('todoKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('todos')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');

        tbl
          .text('taskDescription')
          .notNullable();

          tbl
          .text('notes');

          tbl
          .boolean('completed')
          .notNullable()
          .defaultTo(false);
      })
  };

  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('todos_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('todos') 
  };
