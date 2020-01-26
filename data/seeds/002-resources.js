exports.seed = function(knex) {
    return knex('resources').truncate()
      .then(function () {
        return knex('resources').insert([
          {
              id: 1, 
              resourceName: 'Bathroom'
            },
          {
              id: 2, 
              resourceName: 'HomeWork'
            },
          {
              id: 3, 
              resourceName: 'League of Legends'
            },
          {
              id: 4, 
              resourceName: 'Smite'
            },
          {
              id: 5, 
              resourceName: 'Legends'
            },
        ]);
      });
  };