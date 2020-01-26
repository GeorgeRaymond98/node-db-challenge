const express = require('express')

const server = express()
const TodoRouter = require('./routes/todos')

server.use(express.json())

server.use('/api', TodoRouter);

server.get('/', (req, res) => {
    res.send('Lambda Node-DB-Challenge')
})
module.exports = server;