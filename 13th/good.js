// var http = require ('http')
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('Hello World!')
// })

var http = require ('http');
http.createServer(function (req, res) {
    res.write("I am a programmer!")
    res.end(); //end the response
}).listen(8080)
