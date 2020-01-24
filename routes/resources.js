const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findResource,
    findResourceById,
    add,
    addResource
}

function find() {
    return db('todos')
}

function findById(id) {
    return db('todos')
    .where({ id })
    .first()
}

function findResource(todoId) {
    return db('todos')
    .join('todo_resources', 'resources.id', 'todo_resources.resource_id')
    .where({'todo_resources.todo_id': todoId})
}

function add(data) {
    return db('todos').add(data ,'id')
    .then(([id]) => {
        return findById(id)
    });
}

function findResourceById(id) {
    return db('resources')
    .where(({ id }))
}

function addResource(todoId, resource ) {
    return db('resources').insert(resource)
    .then(([ id ]) => {
        return db('todo_resources').insert({
            todo_id: todoId,
            resource_id: id,
        })
    })
    .catch(() => {
        return findResourceById(id)
    })
}
