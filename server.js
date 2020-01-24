const express = require('express')
const helment = require('helment')

const server = express()
const SchemeRouter = require('./schemes/scheme-router')

server.use(helment())
server.use(express.json())
server.use('/api/schemes', SchemeRouter);

module.exports = server;