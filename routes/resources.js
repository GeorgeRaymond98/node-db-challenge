
const db = require('../data/db-config')
module.exports = {
    getAllTodos,
    getTodoById,
    addTodo,
    getAllResources,
    getTodoResources,
    addResource,
    addTodoResource,
    getTodoTasks,
    addTask

}

function getAllTodos(){
    return db('todos')
}

function getTodoById(id){
    if(id){
        return db('todos')
        .where({id})
    } else {
        return null;
    }
    
}

function addTodo(todo){
    return db('todos')
    .insert(todo)
}

function getAllResources(){
    return db('resources')
}

function getTodoResources(id){
    return db.select('todos_resources.id', 'resources.resourceName', 'todos.todoName')
        .from('todos_resources')
        .join('todos', 'todos_resources.todoKey', 'todos.id')
        .join('resources', 'todos_resources.resourceKey', 'resources.id')
        .where('todoKey', id)
}


function addResource(resource){
    return db('resources').insert(resource)
}

function addTodoResource(id, td){
        const newId = parseInt(id)

        return db('todos_resources').insert({
            TodoKey: newId, 
            resourceKey: (db.select('id')
                .from('resources')
                .where('resourceName', td.resourceName)
            )
        })       
}

function getTodoTasks(id){
    return db.select('tasks.id', 'tasks.taskDescription', 'tasks.notes', 'todos.todoName', 'todos.todoDescription')
        .from('tasks')
        .join('todos', 'tasks.todotKey', 'todos.id')
        .where('todosKey', id)
}

function addTask(id, task){
    const parsedId = parseInt(id)
    return db('tasks').insert({
        todoKey: parsedId,
        taskDescription: task.taskDescription,
        notes: task.notes
    })
}