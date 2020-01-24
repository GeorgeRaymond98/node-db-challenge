exports.up = function(knex) {
    return knex.schema
      .createTable('todos', tbl => {
        tbl.increments();

        tbl
          .string('name', 255)
          .unique()
          .notNullable();

        tbl.string('description', 255);

        tbl.boolean('completed').notNullable();
      })
    //   ------------------------------------------
      .createTable('resources', tbl => {
        tbl.increments();

        tbl
          .string('name', 255)
          .unique()
          .notNullable();

        tbl.string('description', 255);
      })
       //   ------------------------------------------
      .createTable('tasks', tbl => {
        tbl.increments();

        tbl.string('description', 255).notNullable();

        tbl.string('notes', 255).notNullable();

        tbl.boolean('completed').notNullable();

        tbl
          .integer('todo_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('todos')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
       //   ------------------------------------------
      .createTable('todo_resources', tbl => {
        tbl.increments();

        tbl
          .integer('todo_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('todos')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');

        tbl
          .integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
  };

  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('todo_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('todos') 
  };