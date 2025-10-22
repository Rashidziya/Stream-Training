const fs = require('fs');


let data = fs.readFileSync("Notes.txt");
console.log(data.toString());
console.log("Synchronous Approach of Reading Files");


fs.readFile("Notes.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
console.log("Asynchronous Approach of Reading Files");