const express = require('express')

const server = express()
const TodoRouter = require('./routes/todos')
server.use(express.json())
server.use('/api/todos', TodoRouter);

server.get('/', (req, res) => {
    res.send('Node-DB-Challenge')
})
module.exports = server;