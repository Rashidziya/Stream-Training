const fs = require("fs");

function redaFileAsync(filename,callback) {
  fs.readFile(filename, (err, data) => {
    if(err){
        callback(err);
    }else{
        callback(null,data.toString());
    }
  });
}

// function callback(err,data){
//     if(err){
//         console.log("Error : ",err);
//     }else{
//         console.log("Success : ",data);
//     }
// }

// redaFileAsync("file1.txt",callback);

redaFileAsync('file1.txt',(err1,data1)=>{
    if(err1){
        console.log("Error : ",err1);
    }else{
        console.log("Success : ",data1);
    }


    redaFileAsync('file2.txt',(err2,data2)=>{
        if(err2){
            console.log(err2);
        }
        else{
            console.log(data2);
        }

        redaFileAsync('Notes.txt',(err3,data3)=>{
            if(err3){
                console.log("Error: ",err3);
            }else{
                console.log(data3);
            }
        })
    })
})