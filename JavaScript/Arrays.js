// --------------------------We will learn about ARRAYS in javasceipt -------------------------------------------------------------------


// 1.> ----------------------------------- Map in js --------------------------------------------------------------

/*

const array = ["Apple","Banana","Cherry","Watermelon","papya"];

// console.log(array.length()); ❌
console.log(array.length) 

const newArr = array.map(maps=>{return maps+" is Fruit"});    // if we use map =>{} then we have to return otherwise each element would become undefined of newArray
console.log(newArr);

console.log(array);


const numbers = [1, 2, 3];

// Double each number and return a new array
const doubled = numbers.map(num => num * 2);     // without {} -> No, Need to return 

console.log(doubled);  
console.log(numbers);  

Note :- Map -> it used when there is need to change the Actual element and it returns new Array with modified Elements

*/


// 2.> --------------------------------------- for Each in js ----------------------------------------------------------

/*

Example 1...
const array = ["Apple","Banana","Cherry","Watermelon","papya"];


console.log(array);
array.forEach(function(item,index){
    array[index] = item +" is fruit";
})

console.log(array);

Example 2..

const number = [64,50,41,25];
console.log(number);

number.forEach(myFunction);
function myFunction(item,index){
    number[index] = item * 10;
}
console.log(number);

Note :- -> Unlike Map it Changes the Array element In-Place (Not return new Array)
        -> forEach calls a function for each Element in the array (function lets you do anything you want but at in-place)
        -> syntax : ArrayName.foreach(function(currElemetn, index(currentElement), arr(currentElement)))

*/


// 3.> ----------------------------------- filter in js ---------------------------------------------------------------

/*

const products = [
  { name: "A", stock: 0 },
  { name: "B", stock: 5 },
  { name: "C", stock: 12 }
];

// Keep only products where stock is greater than 0
const inStock = products.filter(product => product.stock > 0);

console.log(inStock);


Note :-  -> Filter : Based on some condition it is used to filter the array element and return element (which satisfies condition)

*/


// 4.> --------------------------------------- Reduce in js ----------------------------------------------------------------------

/*

const items = [5, 10, 2];

// 0 is the initial value for the 'accumulator' (acc)
const total = items.reduce((acc,currVal)=>{
    return acc + currVal;
},10)

console.log(total); // Output: 27 -> Similar to , sum = 0 (outside loop) then inside loop doing sum = sum + CurrArrElement


Note :- -> Reduce provides the one Value. it Traverse the whole arr but generate as single output

*/

// 5.> -------------------------------------- find in js ---------------------------------------------------------------------

/*

const items = [5, 10, 2];
const ans = items.find(item => item == 10);
console.log(ans);

Note :- -> find is used to find an element if present return the element else retunrs undefined
        -> it runs a function for each element in the array (function performs comparison to find)
        -> syntax : array.find(function(currentValue, index, arr),thisValue)


*/


// 6.> ------------------------------------Some other methods(Array) in js ----------------------------------------------

/*

.findIndex()  ->  Returns the index of the first element that satisfies a testing function, or -1 if none is found.	Getting the position of an item you need to update or delete.
.some()	      ->  Checks if at least one element satisfies a testing function. Returns true or false.	Checking if any items in a shopping cart have run out of stock.
.every()	  ->  Checks if all elements satisfy a testing function. Returns true or false.	Checking if every field in a form is valid.
.includes()	  ->  Checks if an array includes a certain value among its elements. Returns true or false.	Quickly verifying if a tag exists in a list of tags.
.push() / .pop() -> Adds (push) or removes (pop) an element from the end of the array.	Basic stack operations.
.shift() / .unshift() ->	Removes (shift) or adds (unshift) an element from the beginning of the array.	Basic queue operations.

*/




// 7.> ---------------------------------------- Array deStructuring --------------------------------------------

/*

const array = [1,2,3,4,5,6,8];
const [first,second,third,fourth,fifth,six,sevent] = array;
console.log(first);


// ussing rest operator to list remaining elements of the array

const [one,two,...restElement]=array;
console.log(one);
console.log(two);
console.log(restElement);

let x = 10;
let y = 20;

// Swap values
[x, y] = [y, x];

console.log(x); // Output: 20
console.log(y); // Output: 10

*/