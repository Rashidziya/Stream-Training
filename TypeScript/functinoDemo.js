function sayHello() {
    console.log("Hello");
}
sayHello();
sayHello();
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 20));
//console.log(sum(10,"20"))//error
//console.log(sum(10))//error
//console.log(sum())//error
var sub;
sub = function (n1, n2) { return n1 - n2; };
var mul;
mul = function (n1, n2) { return n1 * n2; };
console.log(sub(10, 20));
console.log(mul(10, 20));
var add;
var div;
add = function (x, y) { return x + y; }; // similar to function add(x,y){ return x+y};
div = function (x, y) { return x / y; };
console.log(add(10, 20));
console.log(div(20, 10));
function calculate(num1, num2, optr) {
    // add here for division and modulo and adddition 
    console.log(optr(num1, num2)); //optr(10,20)
}
calculate(10, 20, sub);
calculate(10, 20, mul);
