const http = require('http');
const index = require('../banka/index');

const port = process.env.PORT || 3000;
const server = http.createServer(index);

server.listen(port);