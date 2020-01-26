exports.seed = function(knex) {
    return knex('projects_resources').truncate()
      .then(function () {
        return knex('projects_resources').insert([
          {id: 1, 
            projectKey: 1, 
            resourceKey:1
        },
          {
              id: 2, 
              projectKey: 1, 
              resourceKey:2
            },
          {
              id: 3, 
              projectKey: 1, 
              resourceKey:3
            },
          {
              id: 4, 
              projectKey: 3, 
              resourceKey:4
            },
          {
              id: 5, 
              projectKey: 2, 
              resourceKey:5
            }
        ]);
      });
  };