const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

function readFileAsync(filename,callback){
    fs.readFileAsync(filename,'utf-8')
    .then(data=>{
        callback(null,data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

const promisereturning = Promise.promisify(readFileAsync);
promisereturning('Rashid.txt')
.then((data)=>{
    console.log("Data : ",data);
})
.catch((error)=>{
    console.log("Error : ",error);
})