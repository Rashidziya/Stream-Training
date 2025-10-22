function sum(a,b){
    return a+b;
}



sum(10,20);          // return correct result
sum(10,"20");       // return 1020 . if one input is string js will concatenate for + operator
sum(10);            // return NaN . bec. one parameter is missing.