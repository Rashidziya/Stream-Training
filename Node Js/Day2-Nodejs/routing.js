let http = require('http');
http.createServer((request,response)=>{
    console.log(request.url)
    if(request.url =='/'){
        response.write("<h1> Hello user how are you doing ? </h1>");
        response.end();
    }
    else if(request.url == '/about'){
        response.write("<h1> This is my about page </h1>")
        response.end();
    }
    else if(request.url == '/products'){
        // if(request.url == '/products/electronics'){
        //     response.write("<h1>Electronics item inside the product page .</h1>");
        //     response.end();
        // }
        response.write("<h1> This is my products page </h1>")
        response.end();
       
    }
    else if(request.url == '/service'){
        response.write("<h1> This is my services page </h1>")
        response.end();
    }
    else if(request.url == '/contact'){
        response.write("<h1> This is my contact page </h1>")
        response.end();
    }else{
        response.write("<h1> Invalid Url </h1>");
        response.end();
    }
}).listen(8080);
console.log("Server Started at port number : 8080");


/*

create 3 more  routes ....
1. products
2. services 
3. contact.

*/