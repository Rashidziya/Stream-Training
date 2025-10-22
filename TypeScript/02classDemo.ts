class Human{
    private fname:string
    private lname:string
    private _age:number
    private loc:string
 
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
 
let h1=new Human("Virat","Kholi",50,"mumbai")
console.log(h1.fullname())
h1.age=70//h1.age(500)
console.log(h1.age)

// for getter and setter we can simple call the function like the above no need for function type expression
// for constructor in js we dont use the class_name instead we use constructor keyword itslef to initialize the constrcutor 



class Employee extends Human
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
}


let e1=new Employee("Virat","Kholi",50,"mumbai",123,200000,10);

console.log(e1);