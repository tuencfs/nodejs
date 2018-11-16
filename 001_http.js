var http = require('http');

console.log('hello http server');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);

console.log('end hello http server');
