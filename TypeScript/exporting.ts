function sayHello(){
    console.log("Hello ");
}


function sub(a:number,b:number){
    return a-b;
}
sub(10,20);


function mul(a:number,b:number){
    return a*b;
}


export {sub,mul};    // to import this we have to use same name in the import file
export default sayHello; // we can import this with other name as well 
                        // in one file only one default export is allowed