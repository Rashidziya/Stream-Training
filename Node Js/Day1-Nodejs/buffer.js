buff = new Buffer.alloc(20);
let a = buff.write("Welcome");
console.log(a.toString());


buf = new Buffer.from("welcome");
console.log(buf);
console.log(buf.toString());


// try to copy the buffer - create buffer and copy the value into another buffer..

buff2 = new Buffer.from("data");
buff3 = new Buffer.alloc(buff2.length);
buff2.copy(buff3);
console.log(buff3.toString());


// try to concat or join two buffers.
buffer1 = new Buffer.from("welcome");
buffer2 = new Buffer.from("Home");
const buffer3 = Buffer.concat([buffer1,buffer2]);
console.log(buffer3.toString());


// Trying slice 

const buffer5 = new Buffer.from("Accenture");
const buffer6 = buffer5.slice(0,6);
console.log(buffer6.toString());