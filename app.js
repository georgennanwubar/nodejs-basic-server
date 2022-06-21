//Import core modules
const http = require('http');

//Import custom modules
const routes = require('./routes');

http.createServer(routes.handler).listen(3000, 'localhost');
