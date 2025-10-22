class Stack<T>{
    list:T[]

    constructor(intialvalue:T[])
    {
     this.list=intialvalue
    }

    push(item:T)
    {
        this.list.push(item)
    }
    pop()
    {
       this.list.pop()
    }
    top()
    {
      this.list[this.list.length-1]
    }

}

let s1=new Stack<number>([10,20,30,40])
s1.push(100)
console.log(s1.list)

let s2=new Stack<string>(["sachin","virat","rohit"])
s2.push("rahul")
console.log(s2.list)

function echo<T>(x:T):T
{
   return x
}

console.log(echo<number>(10))
console.log(echo<string>("Hello"))
console.log(echo<number[]>([10,20,30,40]))