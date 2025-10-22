
interface person {
    name : string,
    height : number,
    weight : number
}


let user1 : person = {
    name: "Rashid",
    height : 1.75,
    weight : 60
}

let BmiCal : number = user1.weight / user1.height;
console.log(BmiCal)

if(BmiCal <18.5){
    console.log(user1.name ," You are underweight");
}
else if(BmiCal >= 18.5 && BmiCal <= 24.9){
    console.log(user1.name, "You have Normal weight");
}
else if(BmiCal >24.9 && BmiCal <= 29.5){
    console.log(user1.name," You are overweight");
}else{
    console.log(user1.name," You are Obese");
}