type userobj ={
    fname: string,
    lname: string,
    location : string,
    age : number,
    add : ()=>string
}


let user_1 : userobj ;
user_1 ={
    fname: "Rashid",
    lname : "ziya",
    location: "nawada",
    age: 25,
    add : function (){return ("he lives in " + this.location)} 
}


