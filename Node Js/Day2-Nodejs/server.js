const http = require('http');
http.createServer((requeest,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Welcome the the world of Node Js Server");
    response.end();
}).listen(8081);
console.log("Server started at port Number 8081");