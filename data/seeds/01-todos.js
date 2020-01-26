exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          {
              id: 1, 
              projectName: 'Office', 
              projectDescription: 'Do work here'
            },
          {
              id: 2, 
              projectName: 'Bath', 
              projectDescription: 'Become clean here'
            },
          {
              id: 3, 
              projectName: 'Living',
              projectDescription: 'Try not to die here'
            },
        ]);
      });
  };