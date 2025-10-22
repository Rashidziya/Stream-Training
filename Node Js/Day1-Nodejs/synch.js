const fs = require('fs');
let data = fs.readFileSync("Notes.txt");
console.log(data.toString());
console.log("My Name is : Rashid");