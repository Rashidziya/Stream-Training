const a = require('readline');

const rl = a.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("What is your fav. Technology ?",(answer)=>{
    console.log("tech : ",answer);
    rl.close();
})


// rl.question("What is your name ?",(answer)=>{
//     console.log("Hi Welcome to Node Js  : ",answer);
//     rl.close();
// })


