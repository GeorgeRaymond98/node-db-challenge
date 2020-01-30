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

router.get('/todos', (req, res) => {
    Todos.getAllTodos()
        .then(todos=>{
            res.status(200).json(todos)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get todos' });
          });
})

router.get('/todos/:id', (req, res) => {
    Todos.getTodoById(req.params.id)
        .then(todo=>{
            res.status(200).json(todo)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get that id' });
        });
})

router.get('/todos/:id/tasks', (req, res) => {
    Todos.getTodoTasks(req.params.id)
        .then(tasks=>{
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get task with that id' });
        });
})

router.get('/todos/:id/resources', (req,res) => {
    Todos.getTodoResources(req.params.id)
        .then(resources=>{
            res.status(200).json(resources)
        })
        .catch(()=>{
            res.status(500).json({message: 'Failed to get resource with that id '});
        })
})

router.get('/resources', (req, res) => {
    Todos.getAllResources()
        .then(resources=>{
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to get resources ' });
        });
})


router.post('/todos', (req, res) => { 
    Todos.addTodo(req.body)
        .then(todo=>{
            res.status(201).json(todo)
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not post todos' });
        });
})

router.post('/todos/:id/resources', (req, res) => {
    Todos.addTodoResource(req.params.id, req.body)
        .then(resource=>{
            res.status(201).json(resource)
        })
        .catch(()=>{
            res.status(500).json({message: 'Could not post'})
        })
})

router.post('/todos/:id/tasks', (req, res) => {
    Todos.addTask(req.params.id, req.body)
        .then(todo=>{
            res.status(201).json(todo)
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not post' });
        });
})


  router.post('/resources', (req, res) => {
      Todos.addResource(req.body)
      .then(resource => {
          res.status(201).json(resource)
      })
      .catch(err => {
          res.status(500).json({message: 'Could not create resource'})
      })
  })

  module.exports = router; 