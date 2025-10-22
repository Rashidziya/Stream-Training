let age:number
age=10
//age="Hello"
console.log(typeof age)
 
let x=10
console.log(typeof x)
//x="hello"
x=20
 
let msg:string="Hello"
console.log(typeof msg)
 
//union
let alphanum:number|string|boolean
alphanum=10
alphanum="Hi"
alphanum=true
 
let islogin:boolean
islogin=true
 
 
 
let nums:number[]=[10,20,30,40,50]
 
let alphanums:(number|string)[]=[10,20,30,50,"60","70"]
 
let user1:{uname:string,
    age:number,
    location:string,
    hobbies?:string[]
}
 
user1={uname:"sachin",location:"mumbai",age:50,hobbies:["cricket","football"]}
 
let user2:{uname:string,
    age:number,
    readonly location:string,
    hobbies?:string[]
}={uname:"virat",location:"mumbai",age:40}
 
user2.uname="Virat kholi"
//user2.location="Chennai"//error
 
const country="India"
//country="USA"//error
 
 
//type aliases
 
//type alias_name=actual_type
 
type Userobj={uname:string,
    age:number,
    readonly location:string,
    hobbies?:string[]
}
 
let user3:Userobj={
    uname:"Rohit",
    age:40,
    location:"mumbai"
}
 
//user3.location="pune"
 
type alphanum_type=(number|string)
 
let new_alphanum:alphanum_type
new_alphanum=10
new_alphanum="string"
 
//string literals
let gender:'female'|'male'|"other"
gender="female"
gender="male"
 
type day="sun"|"mon"|"tue"|"wed"|"thu"|"fri"|"sat"
 
let starting_day:day="mon"
 
//any
 
let y:any
 
y="hello"
y=10
y=true
 
//void
 
let empty_var:void
 
//empty_var=10//error