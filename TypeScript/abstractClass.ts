abstract class Human{
    private fname:string
    private lname:string
    private _age:number
    protected loc:string
 
    constructor(f_name:string,l_name:string,_age:number,_loc:string)
    {
       this.fname=f_name
       this.lname=l_name
       this._age=_age
       this.loc=_loc
    }
 
    fullname()
    {
        return this.fname+" "+this.lname
    }
 
    public get age()
    {
        return this._age
    }
 
    public set age(newage:number)
    {
      if(newage<100 && newage>0)
      {
        this._age=newage
      }
    }
 
 
 
}
 
interface Stockholder{
    stockPurcase():void
}
 
/*let h1=new Human("Virat","Kholi",50,"mumbai")
console.log(h1.fullname())
h1.age=70//h1.age(500)
console.log(h1.age)*/
 
class Employee extends Human implements Stockholder
{
    eid:number
    salary:number
    exp:number
 
    constructor(f_name:string,l_name:string,_age:number,_loc:string,_eid:number,_sal:number,_exp:number)
    {
        super(f_name,l_name,_age,_loc)
        this.eid=_eid
        this.salary=_sal
        this.exp=_exp
    }
 
    stockPurcase(): void {
        console.log("employee Purchasing organization stock")
    }
 
    getDetails()
    {
        return `I am ${this.fullname()} from ${this.loc}
        having ${this.exp} years of experience`
    }
 
 
}
 
class Customer extends Human implements Stockholder{
 stockPurcase(): void {
     console.log("Customer purchasing organization stock!!")
 }
}
 
class Investors implements Stockholder{
stockPurcase(): void {
    console.log("Investors purchaisng stocks")
}
}
 
let e1=new Employee("sachin","tendulkar",50,"mumbai",123,50000,5)
console.log(e1.getDetails())