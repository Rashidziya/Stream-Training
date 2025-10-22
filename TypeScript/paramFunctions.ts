//optional param
function fullname(firstname:string,lastname?:string,middlename?:string)
{
    return firstname+" "+(middlename?middlename:"")+" "+(lastname?lastname:"")
}
 
console.log(fullname("sachin","tendulkar","Ramesh"))
console.log(fullname("virat","kholi"))
console.log(fullname("rahul"))
 
//default param
function discount(price:number,dis_per:number=0.05)
{
    return price-(price*dis_per)
}
 
console.log(discount(100,0.1))
console.log(discount(50))


function taxWithDiscount(price:number , dis_price: number =0.5, gstTax : number = 0.18){
    const totalTax = price - (price * gstTax);
    let TotalPrice = price - (price * dis_price);
    TotalPrice = TotalPrice + totalTax;

    return TotalPrice;
}

console.log(taxWithDiscount(100));


//Rest param
function sum(n1:number,...rem_nums:number[])
{
  let total=0
  for(let i=0;i<rem_nums.length;i++)
  {
    total=total+rem_nums[i]
  }
  console.log(total)
}
 
// sum()
sum(10)
sum(10,20)
sum(10,20,30)


// Task -> create a function which will concatenate n No.of string with hyphen(_);

function concatenateString(...con_string:string[]){
    let resultString = "";
  for(let i=0;i<con_string.length;i++)
  {
    resultString = resultString +"_"+con_string[i];
  }
  return resultString;
}

console.log(concatenateString("mY","name","is","Rashid","ziya","and","i lives ","in","Nawada"));