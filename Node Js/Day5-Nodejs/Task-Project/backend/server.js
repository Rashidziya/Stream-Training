const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/api",(req,res)=>{
    res.send("Hello user How are You ? ");
    // res.json({
    //     message:"Hello user How are You ? "
    // })
})
app.listen(port,()=>{
    console.log(`server started at : ${port}`);
})