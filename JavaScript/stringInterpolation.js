// using BackTick(`Rashid`)  for string interpolation


let message = "hello guys \n good morning \n how are you doing "  // without backtick to make new line
console.log(message)
let name = "rashid";

let message2 = `hello ${name} guys ,
good morning ,
how are you doing `;     // with backtick we have to use ${for any variable to use} in the code.

console.log(message2);



const username = "DevUser";
const element = `<div class="profile">Welcome, ${username}</div>`;  // it also works with Html as well ...

