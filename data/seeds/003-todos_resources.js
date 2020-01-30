exports.seed = function(knex) {
    return knex('todos_resources').truncate()
      .then(function () {
        return knex('todos_resources').insert([
          { id: 1, 
            todoKey: 1, 
            resourceKey:1
        },
          {
              id: 2, 
              todoKey: 1, 
              resourceKey:2
            },
          {
              id: 3, 
              todoKey: 1, 
              resourceKey:3
            },
          {
              id: 4, 
              todoKey: 3, 
              resourceKey:4
            },
          {
              id: 5, 
              todoKey: 2, 
              resourceKey:5
            }
        ]);
      });
  };

  