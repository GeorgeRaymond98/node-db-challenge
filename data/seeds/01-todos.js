exports.seed = function(knex) {
    return knex('todos').del()
      .then(function () {
        return knex('todos').insert([
        {
            id:1,
            name: 'Office',
            description:' Dont get fired',
            completed:false
        },
        {
            id:2,
            name:'Bath',
            description:'Get clean',
            completed:false
        },
        {
            id:3,
            name:'Living',
            description:' Stay alive',
            completed:false
        }
        ]);
      });
  };