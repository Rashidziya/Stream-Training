const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// it is a middleware that helps to parse incoming data from request.body
const urlencodedParser = bodyParser.urlencoded({extended:false});
const port = 8086;

app.use(express.static('public'));

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname +'/' + 'index.html');
});

// handling the request
app.post('/rashid',urlencodedParser,(req,res)=>{
    response ={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
})
app.listen(port,()=>{
    console.log(`Server Started at port : ${port}`);
})