const server = require('./server');
const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`Listening on port${PORT}....`);
})