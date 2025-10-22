// < 1. >  ---------------Scope (Local vs Global) in Javascript -------------------

/*

let name = "Rashid";
var name2 = "Ziya";

function showName(){
    console.log(name);        Global Variable (let,var) both can accesed from any Local function/Block
    console.log(name2);
}

showName();

*/

// ------------------------------------------------------------------------------

/*


function showName(){
    
    let name = "Rashid";
    var name2 = "Ziya";           Any Varibale (let , var, const) Declared Locally 
                                cannot be accessed Globally. 
}
    console.log(name);
    console.log(name2);
showName();


*/






// < 2. >  ----- Example of Functional and Block Scope of Let and Var  in Javascript -----------

/*

{
    var a= 1;
    let b =2;
}

console.log(a); ✅
console.log(b);  ❌


{
    const a = 10;         
}
console.log(a);  ❌


const array = ["Apple","Banana","Cherry","Watermelon","papya"];

function PrintArrElements(array){

     if i do let i = 0; then it is not accesible after for Block Hence -> let is Block Scoped
    But for Var it is accesible inside the Function from Any Block Hence -> Functional Scoped
    for(var i = 0; i<array.length; i++){
        console.log(array[i]);
    }
    console.log(i);
}

PrintArrElements(array)

*/





// < 3. > ----------------Example of REdeclaration and Re-Assignment of var and let -------------------------------

/*

function redeclarationExp(){

    var a = 10;                     // Var -> REdeclaration & ReAssginment ✅ Both possible within same function
    var a = 20; 
    console.log("After ReDeclaration of Var (a) : ",a);
    a = 150;
    console.log("After Reassignment of Var (a) : ",a);


    let b = 10;             
    // let b = 190;                 Let -> ReDeclaration ❌  , ReAssignment ✅
    b = 130 ;
    console.log("After ReAssignment of Let (b) : ",b);



    const ab = 20;
    // const ab = 150               const -> ReDeclaration ❌  , ReAssignment ❌
    // ab = 30;   
    console.log("After ReAssignment of const (ab) : ",ab);
}

redeclarationExp();

*/


// < 4. > ------------------- Hoisting & Temporal Dead Zone(TBZ) in Js -----------------------------

/*


Hoisting -> it is moving the Declration of variable on top of the Scope (if tried to access before declaration)
            But it moves on top the declaration not the intialization(let and const)

console.log(varA);                       Hoisted ✅ and Initialized ✅(Undefined)
var varA = "Rashid";


TDZ -> The Period After starting of the Functin/Block till declaration of (const & let) is TDZ.

console.log(letA);
let letA = 10;                          Hoisted ✅ But Not Initialized ❌(Refrence Error)

console.log(constA);                    Hoisted ✅ But Not Initialized ❌ (Refrence Error)
const constA = 20;


*/





// < 5. > --------------Difference in var , let & const ------------------------------------

/*

                        var                              let                                 const
scope :             Functional                          Block                               Bolck
redeclaration :         Yes                               No                                  No
reassignment  :         Yes                               Yes                                 No
Hoisting  :             Yes(undefined)                    Yes(Refrence Error)               Yes(Refrence Error)
Use Case  :             Not used❌(obsolete)                Used ✅                           Used ✅ 


where we will get refrence eror(const & let) and undefined(var) if we access the variable before intializing it
*/