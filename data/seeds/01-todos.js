exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todos').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('todos').insert([
          {
              id: 1, 
              todoName: 'Office', 
              todoDescription: 'Do work here'
            },
          {
              id: 2, 
              todoName: 'Bath', 
              todoDescription: 'Become clean here'
            },
          {
              id: 3, 
              todoName: 'Living',
              todoDescription: 'Try not to die here'
            },
        ]);
      });
  };