interface Product{
    readonly pname:string,
    price:number,
    rating:number,
    instock:boolean,
    category:"electronics"|"furniture"|"apparel",
    comments?:string[]
}
 
let p1:Product={
    pname:"Mobile",
    price:50000,
    rating:4.5,
    instock:true,
    category:"electronics"
}