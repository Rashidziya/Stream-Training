const fs = require('fs');
fs.writeFile('welcome.txt','Learning Node Js with mongoDB',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Data Written Successfully !");
    console.log("Reading Data ");
    fs.readFile('welcome.txt',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Data : ",data.toString());
        }
    })
})


/*

Note :- this code overwrites the file and prints two time the same data written by this 
        

fs.writeFile('welcome.txt','Learning MEAN Stack at Accenture',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Data Written Successfully !");
    console.log("Reading Data ");
    fs.readFile('welcome.txt',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Data : ",data.toString());
        }
    })
})

*/