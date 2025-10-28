const express = require('express');
const app = express();

const port = 4040;



app.listen(port,()=>{
    console.log(`server started at port number : ${port}`);
})