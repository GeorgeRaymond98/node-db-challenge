exports.seed = function(knex) {
    return knex('tasks').truncate()
      .then(function () {
        return knex('tasks').insert([
          {
              id: 1, 
              todoKey: 1, 
              taskDescription: 'Play lol', 
              notes: 'Become master rank'
            },
          {
              id: 2, 
              todoKey: 1, 
              taskDescription: 'Finish Homework',
              notes: 'DO or Die'
            },
          {
              id: 3, 
              todoKey: 1, 
              taskDescription: 'Play Smite', 
              notes: 'Get master rank'
            },
          {
              id: 4,
              todoKey: 2, 
              taskDescription: 'Bathroom',
              notes: 'combine water and soap ro be clean'
            },
          {
              id: 5,
              todoKey: 2, 
               taskDescription: 'Legends',
               notes: 'Unlock all the Legends'
            }
        ]);
      });
  };