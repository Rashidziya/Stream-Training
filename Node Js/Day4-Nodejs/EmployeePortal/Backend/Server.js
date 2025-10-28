const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4040;
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/testing',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const Employee = mongoose.model('Employee',{
    name:String,
    empId:String,
    project:String

});

app.post('/employee',(req,res)=>{
    const empData = req.body;
    const employee = new Employee(empData);
    employee.save()
    .then(()=>{
        res.status(201).json({
            message:"Employee added succesfully ",
            data:employee
        })
    })
    .catch(err=>{
        console.log("Error in sending data ",err);
        res.status(500).json({
            message:"Something went down while sending your data",
            error:err
        })
    })
});

app.get('/getEmp',async (req,res)=>{
    try{
        const employees = await Employee.find();
        res.json(employees)
    }catch(error){
        console.log("Error in reading emp data",error);
        res.status(500).json({
            message:"Server Error",
            Error: error
        })
    }
});

app.listen(port,()=>{
    console.log(`Server started at port number : ${port}`);
})