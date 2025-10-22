function missingSemicolon(name){
    console.log('HI'+name);          // missing semicolon here
}

missingSemicolon('Rashid');


function test(x){
    if(x===10){
        console.log('The value is'+x);
    }

}          // missing closing curly braces error
test(10);