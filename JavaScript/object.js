

// -----------------------------------------Objects in js ---------------------------------------------------------


const obj = {a: 1};  
obj.a = 2; // works  -> obj keys are mutable even if it is const


const car = {
  brand: "Tesla",
  model: "Model 3",
  start: function() {
    console.log("Car started 🚗💨");
  }
};

car.start();  // Car started 🚗💨



const user ={
    name : "rashid",
    age : 25,
    add : {
        Urban : true,
        Mohalla : "kamalpur",
        pincode : 805110,
        state : "Bihar"
    },
    profession : "software engineer"
}


console.log(user);
console.log(user.name);
console.log(user.add.Mohalla);


// object destructuring 
const {name:userName,age,add,profession} = user;
console.log(userName);


// Note :- As object works on the key:pair so we have to give same name of var while destructuring unlike array (as it works by index)