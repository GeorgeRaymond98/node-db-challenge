exports.seed = function(knex) {
    return knex('resource').del()
      .then(function () {
        return knex('resource').insert([
        {
            id:1,
            ResourceName: 'Office',
            instructions: 'Do work here'
        },
        {
            id:2,
            ResourceName: 'Bath',
            instructions: 'Become clean here'
        },
        {
            id:3,
            ResourceName: 'Living',
            instructions: 'Try not to die here'
        }
        ]);
      });
  }; 