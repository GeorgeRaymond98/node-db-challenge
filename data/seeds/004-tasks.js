exports.seed = function(knex) {
    return knex('tasks').truncate()
      .then(function () {
        return knex('tasks').insert([
          {
              id: 1, 
              projectKey: 1, 
              taskDescription: 'Play lol', 
              notes: 'Become master rank'
            },
          {
              id: 2, 
              projectKey: 1, 
              taskDescription: 'Finish Homework',
              notes: 'DO or Die'
            },
          {
              id: 3, 
              projectKey: 1, 
              taskDescription: 'Play Smite', 
              notes: 'Get master rank'
            },
          {
              id: 4,
               projectKey: 2, 
               taskDescription: 'Bathroom',
               notes: 'combine water and soap ro be clean'
            },
          {
              id: 5,
               projectKey: 2, 
               taskDescription: 'Legends',
               notes: 'Unlock all the Legends'
            }
        ]);
      });
  };