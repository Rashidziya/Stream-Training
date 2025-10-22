function sayHello()
{
    console.log("Hello")
}
 
sayHello()
sayHello()
 
function sum(n1:number,n2:number)
{
    return n1+n2
}
console.log(sum(10,20))
//console.log(sum(10,"20"))//error
//console.log(sum(10))//error
//console.log(sum())//error
 
 
let sub:(x:number,y:number)=>number
 
sub=function(n1:number,n2:number){return n1-n2}
 
let mul:(x:number,y:number)=>number
 
mul=(n1:number,n2:number)=>n1*n2
 
console.log(sub(10,20))
console.log(mul(10,20))


let add : (x:number,y:number)=>number;
let div : (x:number,y:number)=>number;

add = function(x:number,y:number){return x+y};   // similar to function add(x,y){ return x+y};
div = (x:number,y:number)=>x/y;
 
console.log(add(10,20));
console.log(div(20,10));

type arthmetic_func=(n1:number,n2:number)=>number
 
 
function calculate(num1:number,num2:number,optr:arthmetic_func)
{//num1=10,num2=20,optr=function(n1:number,n2:number){return n1-n2}
 // add here for division and modulo and adddition 
console.log(optr(num1,num2))//optr(10,20)
}
 
calculate(10,20,sub)
calculate(10,20,mul)
calculate(10,20,add)
calculate(10,20,div)