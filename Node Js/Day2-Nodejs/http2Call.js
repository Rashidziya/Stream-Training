const http2 = require('http2');

const client = http2.connect("http://127.0.0.1:4000")
let req = client.request({'method':'GET','paht':'/'});

// We r collecting the response data from the server.
let data='';

// handle the response headers.
req.on('response',(responseHeaders)=>{
    console.log("fetching data");
})

// to handle the incoming data chunks.
req.on('data',(chunk)=>{
    data = data + chunk;
})

// handle end of the response.
req.on('end',()=>{
    console.log(data);
    client.destroy();
})