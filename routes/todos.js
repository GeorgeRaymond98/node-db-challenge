const express = require('express')
const router = express.Router();
const Todos = require('./resources')

// router.get('/todos', (req, res) => {
//     Todos.find()
//     .then(todos => {
//       todos = todos.map((todo) => {
//         return {
//           ...todo,
//           completed: !todo.completed
//         }
//       });
//       res.status(200).json(todos)
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({message: 'Could not retrieve todo'})
//     })
//   })

  router.get('/:id/resources', (req, res) => {
    Todos.findResource(req.params.id)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Could not get todos with Id'})
    })
  });

  router.post('/todos', (req, res) => {
    Todos.add(req.body)
    .then(todo => {
        todo.completed =  !todo.completed
        res.status(201).json(todo)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Could not make todos'})
    })
  })

  router.post('/:id/resources', (req, res) => {
      Todos.addResource(req.params.id, req.body)
      .then(resource => {
          res.status(201).json(resource)
      })
      .catch(err => {
          res.status(500).json({message: 'Could not create resource'})
      })
  })

  module.exports = router; 